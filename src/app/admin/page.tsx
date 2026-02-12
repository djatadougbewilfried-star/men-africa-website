'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'editor';
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  dimensions: string;
  image: string;
}

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: 'contact' | 'devis' | 'rdv';
  created_at: string;
  status: 'new' | 'read' | 'replied';
}

interface Visitor {
  id: string;
  ip: string;
  country: string;
  city: string;
  page: string;
  referrer: string;
  user_agent: string;
  created_at: string;
}

interface SiteText {
  id: string;
  section: string;
  key: string;
  value: string;
}

// Fonctions utilitaires
function getStoredData<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const stored = localStorage.getItem(`menafrica_${key}`);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function getStoredSession(): User | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem('menafrica_session');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

// Données par défaut
const defaultUsers: User[] = [
  { id: '1', name: 'Béatrice K.', email: 'kbeatrice645@gmail.com', password: 'MenAfrica2024!', role: 'admin' },
  { id: '2', name: 'Wilfried D.', email: 'djatadougbewilfried@gmail.com', password: 'Admin2024!', role: 'admin' },
  { id: '3', name: 'Communication', email: 'com@menafrica.ci', password: 'Com2024!', role: 'editor' },
];

const defaultProducts: Product[] = [
  { id: '1', name: 'Bordure T1', category: 'Bordures', description: 'Bordure type T1 pour trottoirs', dimensions: '100x20x8 cm', image: '/catalogue/bordure-t1.jpg' },
  { id: '2', name: 'Caniveau Rectangulaire', category: 'Caniveaux', description: 'Caniveau pour évacuation des eaux', dimensions: '100x30x30 cm', image: '/catalogue/caniveau-rectangulaire.jpg' },
  { id: '3', name: 'Pavé I', category: 'Pavés', description: 'Pavé autobloquant forme I', dimensions: '20x10x6 cm', image: '/catalogue/pave-i.jpg' },
  { id: '4', name: 'Dalot Ouvert', category: 'Dalots', description: 'Dalot ouvert pour drainage', dimensions: '100x50x50 cm', image: '/catalogue/dalot-ouvert.jpg' },
  { id: '5', name: 'Buse', category: 'Buses', description: 'Buse en béton armé', dimensions: 'Ø 400mm L=100cm', image: '/catalogue/buse.jpg' },
  { id: '6', name: 'Tétrapode', category: 'Protection côtière', description: 'Bloc tétrapode anti-érosion', dimensions: '50x50x50 cm', image: '/catalogue/tetrapode.jpg' },
];

const defaultTexts: SiteText[] = [
  { id: '1', section: 'Accueil', key: 'hero_title', value: 'MEN AFRICA COMPANY' },
  { id: '2', section: 'Accueil', key: 'hero_subtitle', value: 'BTP • BÉTON MANUFACTURÉ • IMPORT-EXPORT' },
  { id: '3', section: 'Accueil', key: 'hero_description', value: 'Votre partenaire de confiance pour tous vos projets de construction' },
  { id: '4', section: 'Contact', key: 'phone', value: '+225 07 07 02 01 45' },
  { id: '5', section: 'Contact', key: 'email', value: 'MENAFRICA@company-sites.net' },
  { id: '6', section: 'Contact', key: 'address', value: 'Cocody, Riviera Palmeraie, 21 BP 1831 Abidjan 21' },
];

export default function AdminPage() {
  // États principaux
  const [isLoggedIn, setIsLoggedIn] = useState(() => getStoredSession() !== null);
  const [currentUser, setCurrentUser] = useState<User | null>(() => getStoredSession());
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState<User[]>(() => getStoredData('users', defaultUsers));
  const [products, setProducts] = useState<Product[]>(() => getStoredData('products', defaultProducts));
  const [texts, setTexts] = useState<SiteText[]>(() => getStoredData('texts', defaultTexts));
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dbConnected, setDbConnected] = useState(false);

  // États formulaires
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingText, setEditingText] = useState<SiteText | null>(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [newUser, setNewUser] = useState<Partial<User>>({});
  const [contactFilter, setContactFilter] = useState<'all' | 'contact' | 'devis' | 'rdv'>('all');

  // Sauvegarder dans localStorage
  const saveData = useCallback((key: string, data: unknown) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`menafrica_${key}`, JSON.stringify(data));
    }
  }, []);

  // Charger les données depuis Supabase - DÉCLARÉ AVANT useEffect
  const loadDataFromSupabase = useCallback(async () => {
    setIsLoading(true);
    try {
      const [contactsRes, visitorsRes, productsRes] = await Promise.all([
        supabase.from('contacts').select('*').order('created_at', { ascending: false }),
        supabase.from('visitors').select('*').order('created_at', { ascending: false }).limit(100),
        supabase.from('products').select('*'),
      ]);

      if (contactsRes.data) setContacts(contactsRes.data);
      if (visitorsRes.data) setVisitors(visitorsRes.data);
      if (productsRes.data && productsRes.data.length > 0) setProducts(productsRes.data);
    } catch {
      // Supabase connection error - silent fallback to local mode
    }
    setIsLoading(false);
  }, []);

  // Vérifier connexion Supabase
  useEffect(() => {
    async function checkConnection() {
      if (!isLoggedIn) return;
      try {
        const { error } = await supabase.from('contacts').select('count').limit(1);
        if (!error) {
          setDbConnected(true);
          loadDataFromSupabase();
        }
      } catch {
        // Fallback to local mode
      }
    }
    checkConnection();
  }, [isLoggedIn, loadDataFromSupabase]);

  // Connexion
  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setLoginError('');
      localStorage.setItem('menafrica_session', JSON.stringify(user));
    } else {
      setLoginError('Email ou mot de passe incorrect');
    }
  }, [users, email, password]);

  // Déconnexion
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('menafrica_session');
  }, []);

  // CRUD Produits
  const saveProduct = useCallback(async (product: Product) => {
    if (dbConnected) {
      await supabase.from('products').update(product).eq('id', product.id);
    }
    const updated = products.map(p => p.id === product.id ? product : p);
    setProducts(updated);
    saveData('products', updated);
    setEditingProduct(null);
  }, [products, saveData, dbConnected]);

  const addProduct = useCallback(async () => {
    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name || '',
      category: newProduct.category || '',
      description: newProduct.description || '',
      dimensions: newProduct.dimensions || '',
      image: newProduct.image || '/catalogue/default.jpg',
    };
    if (dbConnected) {
      await supabase.from('products').insert(product);
    }
    setProducts(prev => [...prev, product]);
    saveData('products', [...products, product]);
    setNewProduct({});
    setShowAddProduct(false);
  }, [products, newProduct, saveData, dbConnected]);

  const deleteProduct = useCallback(async (id: string) => {
    if (!confirm('Supprimer ce produit ?')) return;
    if (dbConnected) {
      await supabase.from('products').delete().eq('id', id);
    }
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    saveData('products', updated);
  }, [products, saveData, dbConnected]);

  // CRUD Textes
  const saveText = useCallback((text: SiteText) => {
    const updated = texts.map(t => t.id === text.id ? text : t);
    setTexts(updated);
    saveData('texts', updated);
    setEditingText(null);
  }, [texts, saveData]);

  // Statut contact
  const updateContactStatus = useCallback(async (id: string, status: ContactRequest['status']) => {
    if (dbConnected) {
      await supabase.from('contacts').update({ status }).eq('id', id);
    }
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  }, [dbConnected]);

  // CRUD Utilisateurs
  const addUser = useCallback(() => {
    const user: User = {
      id: Date.now().toString(),
      name: newUser.name || '',
      email: newUser.email || '',
      password: newUser.password || '',
      role: (newUser.role as 'admin' | 'editor') || 'editor',
    };
    const updated = [...users, user];
    setUsers(updated);
    saveData('users', updated);
    setNewUser({});
    setShowAddUser(false);
  }, [users, newUser, saveData]);

  const deleteUser = useCallback((id: string) => {
    if (id === currentUser?.id) {
      alert('Impossible de supprimer votre propre compte');
      return;
    }
    if (!confirm('Supprimer cet utilisateur ?')) return;
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    saveData('users', updated);
  }, [users, currentUser, saveData]);

  // Stats
  const stats = useMemo(() => ({
    products: products.length,
    newContacts: contacts.filter(c => c.status === 'new').length,
    totalContacts: contacts.length,
    devis: contacts.filter(c => c.type === 'devis').length,
    rdv: contacts.filter(c => c.type === 'rdv').length,
    users: users.length,
    visitorsToday: visitors.filter(v => new Date(v.created_at).toDateString() === new Date().toDateString()).length,
    totalVisitors: visitors.length,
  }), [products, contacts, users, visitors]);

  // Contacts filtrés
  const filteredContacts = useMemo(() => {
    if (contactFilter === 'all') return contacts;
    return contacts.filter(c => c.type === contactFilter);
  }, [contacts, contactFilter]);

  // Formater date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Page de connexion
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1B2B5A] to-[#0f1a38] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#1B2B5A] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-[#B8923B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#1B2B5A]">Administration</h1>
            <p className="text-gray-500">Men Africa Company</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{loginError}</div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8923B] focus:border-transparent"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8923B] focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#B8923B] text-white font-semibold rounded-lg hover:bg-[#9A7B32] transition-colors"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Admin
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1B2B5A] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#B8923B] rounded-lg flex items-center justify-center font-bold">MA</div>
            <div>
              <h1 className="font-bold">Men Africa Admin</h1>
              <p className="text-xs text-white/70">
                {dbConnected ? <span className="text-green-400">● Supabase connecté</span> : <span className="text-yellow-400">● Mode local</span>}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" target="_blank" className="text-sm text-white/70 hover:text-white">↗ Voir le site</a>
            <span className="text-sm">{currentUser?.name}</span>
            <span className="px-2 py-1 bg-[#B8923B] text-xs rounded">{currentUser?.role}</span>
            <button onClick={handleLogout} className="p-2 hover:bg-white/10 rounded-lg" title="Déconnexion">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm p-4 space-y-2">
              {[
                { id: 'dashboard', icon: '📊', label: 'Tableau de bord' },
                { id: 'visitors', icon: '👁️', label: 'Visiteurs' },
                { id: 'contacts', icon: '📬', label: 'Contacts & Devis', badge: stats.newContacts },
                { id: 'products', icon: '📦', label: 'Produits' },
                { id: 'texts', icon: '📝', label: 'Textes du site' },
                { id: 'users', icon: '👥', label: 'Utilisateurs', adminOnly: true },
              ].map((item) => {
                if (item.adminOnly && currentUser?.role !== 'admin') return null;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id ? 'bg-[#1B2B5A] text-white' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                    )}
                  </button>
                );
              })}
            </nav>
            <button
              onClick={loadDataFromSupabase}
              disabled={isLoading}
              className="w-full mt-4 px-4 py-3 bg-white rounded-xl shadow-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <svg className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {isLoading ? 'Chargement...' : 'Rafraîchir'}
            </button>
          </aside>

          {/* Main */}
          <main className="flex-1">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1B2B5A]">Tableau de bord</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Visiteurs aujourd\'hui', value: stats.visitorsToday, icon: '👁️', color: 'bg-blue-500' },
                    { label: 'Nouvelles demandes', value: stats.newContacts, icon: '📬', color: 'bg-red-500' },
                    { label: 'Demandes de devis', value: stats.devis, icon: '📋', color: 'bg-green-500' },
                    { label: 'Rendez-vous', value: stats.rdv, icon: '📅', color: 'bg-purple-500' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-500 text-sm">{stat.label}</p>
                          <p className="text-3xl font-bold text-[#1B2B5A]">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>{stat.icon}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Produits', value: stats.products, icon: '📦' },
                    { label: 'Utilisateurs', value: stats.users, icon: '👥' },
                    { label: 'Total visiteurs', value: stats.totalVisitors, icon: '📊' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl shadow-sm p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{stat.icon}</span>
                        <div>
                          <p className="text-2xl font-bold text-[#1B2B5A]">{stat.value}</p>
                          <p className="text-gray-500 text-sm">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-[#1B2B5A] mb-4">Dernières demandes</h3>
                  {contacts.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">Aucune demande pour le moment</p>
                  ) : (
                    <div className="space-y-3">
                      {contacts.slice(0, 5).map((contact) => (
                        <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className={`px-2 py-1 text-xs rounded ${contact.type === 'devis' ? 'bg-green-100 text-green-600' : contact.type === 'rdv' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                              {contact.type === 'devis' ? 'Devis' : contact.type === 'rdv' ? 'RDV' : 'Contact'}
                            </span>
                            <div>
                              <p className="font-medium">{contact.name}</p>
                              <p className="text-sm text-gray-500">{contact.subject}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded ${contact.status === 'new' ? 'bg-red-100 text-red-600' : contact.status === 'read' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                            {contact.status === 'new' ? 'Nouveau' : contact.status === 'read' ? 'Lu' : 'Répondu'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Visiteurs */}
            {activeTab === 'visitors' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1B2B5A]">Visiteurs du site</h2>
                  <div className="text-sm text-gray-500">{stats.visitorsToday} aujourd&apos;hui • {stats.totalVisitors} total</div>
                </div>
                {visitors.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                    <span className="text-4xl mb-4 block">👁️</span>
                    <p className="text-gray-500">Aucun visiteur enregistré</p>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Localisation</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Page</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {visitors.map((v) => (
                          <tr key={v.id}>
                            <td className="px-6 py-4"><p className="font-medium">{v.country}</p><p className="text-sm text-gray-500">{v.city}</p></td>
                            <td className="px-6 py-4 font-mono text-sm">{v.page}</td>
                            <td className="px-6 py-4 text-sm">{v.referrer || 'direct'}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{formatDate(v.created_at)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Contacts */}
            {activeTab === 'contacts' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1B2B5A]">Contacts, Devis & RDV</h2>
                  <div className="flex gap-2">
                    {['all', 'devis', 'rdv', 'contact'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setContactFilter(f as typeof contactFilter)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${contactFilter === f ? 'bg-[#1B2B5A] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                      >
                        {f === 'all' ? 'Tous' : f.charAt(0).toUpperCase() + f.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                {filteredContacts.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                    <span className="text-4xl mb-4 block">📬</span>
                    <p className="text-gray-500">Aucune demande</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md ${contact.status === 'new' ? 'border-l-4 border-[#B8923B]' : ''}`}
                        onClick={() => setSelectedContact(contact)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-1 text-xs rounded font-medium ${contact.type === 'devis' ? 'bg-green-100 text-green-600' : contact.type === 'rdv' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                                {contact.type === 'devis' ? '📋 Devis' : contact.type === 'rdv' ? '📅 RDV' : '✉️ Contact'}
                              </span>
                              <h3 className="font-bold text-[#1B2B5A]">{contact.name}</h3>
                              <span className={`px-2 py-1 text-xs rounded ${contact.status === 'new' ? 'bg-red-100 text-red-600' : contact.status === 'read' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                                {contact.status === 'new' ? 'Nouveau' : contact.status === 'read' ? 'Lu' : 'Répondu'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">📧 {contact.email} • 📱 {contact.phone} • 🕐 {formatDate(contact.created_at)}</p>
                            <p className="font-medium text-[#B8923B]">{contact.subject}</p>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <select
                              value={contact.status}
                              onChange={(e) => { e.stopPropagation(); updateContactStatus(contact.id, e.target.value as ContactRequest['status']); }}
                              onClick={(e) => e.stopPropagation()}
                              className="px-3 py-2 border rounded-lg text-sm"
                            >
                              <option value="new">Nouveau</option>
                              <option value="read">Lu</option>
                              <option value="replied">Répondu</option>
                            </select>
                            <a href={`mailto:${contact.email}?subject=Re: ${contact.subject}`} onClick={(e) => e.stopPropagation()} className="px-4 py-2 bg-[#1B2B5A] text-white rounded-lg hover:bg-[#2A3F7A] text-sm">Répondre</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {selectedContact && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedContact(null)}>
                    <div className="bg-white rounded-2xl p-6 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
                      <div className="flex justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#1B2B5A]">{selectedContact.subject}</h3>
                        <button onClick={() => setSelectedContact(null)} className="text-2xl">&times;</button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div><p className="text-sm text-gray-500">Nom</p><p className="font-medium">{selectedContact.name}</p></div>
                        <div><p className="text-sm text-gray-500">Email</p><p className="font-medium">{selectedContact.email}</p></div>
                        <div><p className="text-sm text-gray-500">Téléphone</p><p className="font-medium">{selectedContact.phone}</p></div>
                        <div><p className="text-sm text-gray-500">Type</p><p className="font-medium">{selectedContact.type}</p></div>
                      </div>
                      <div className="mb-4"><p className="text-sm text-gray-500 mb-2">Message</p><p className="bg-gray-50 p-4 rounded-lg">{selectedContact.message}</p></div>
                      <div className="flex gap-2">
                        <a href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`} className="flex-1 py-3 bg-[#B8923B] text-white rounded-lg text-center font-medium">📧 Répondre</a>
                        <a href={`tel:${selectedContact.phone}`} className="flex-1 py-3 bg-[#1B2B5A] text-white rounded-lg text-center font-medium">📞 Appeler</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Produits */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1B2B5A]">Produits</h2>
                  <button onClick={() => setShowAddProduct(true)} className="px-4 py-2 bg-[#B8923B] text-white rounded-lg hover:bg-[#9A7B32] flex items-center gap-2">+ Ajouter</button>
                </div>
                {showAddProduct && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-[#1B2B5A] mb-4">Nouveau produit</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Nom" value={newProduct.name || ''} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="px-4 py-2 border rounded-lg" />
                      <input type="text" placeholder="Catégorie" value={newProduct.category || ''} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} className="px-4 py-2 border rounded-lg" />
                      <input type="text" placeholder="Dimensions" value={newProduct.dimensions || ''} onChange={(e) => setNewProduct({ ...newProduct, dimensions: e.target.value })} className="px-4 py-2 border rounded-lg" />
                      <input type="text" placeholder="Image (/catalogue/...)" value={newProduct.image || ''} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} className="px-4 py-2 border rounded-lg" />
                      <textarea placeholder="Description" value={newProduct.description || ''} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="col-span-2 px-4 py-2 border rounded-lg" rows={2} />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button onClick={addProduct} className="px-4 py-2 bg-green-600 text-white rounded-lg">Enregistrer</button>
                      <button onClick={() => { setShowAddProduct(false); setNewProduct({}); }} className="px-4 py-2 bg-gray-200 rounded-lg">Annuler</button>
                    </div>
                  </div>
                )}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produit</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Catégorie</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dimensions</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {products.map((p) => (
                        <tr key={p.id}>
                          <td className="px-6 py-4"><div className="w-16 h-16 relative bg-gray-100 rounded"><Image src={p.image} alt={p.name} fill className="object-contain p-1" /></div></td>
                          <td className="px-6 py-4">
                            {editingProduct?.id === p.id ? (
                              <input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} className="px-2 py-1 border rounded w-full" />
                            ) : (
                              <div><p className="font-medium">{p.name}</p><p className="text-sm text-gray-500">{p.description}</p></div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editingProduct?.id === p.id ? (
                              <input type="text" value={editingProduct.category} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })} className="px-2 py-1 border rounded" />
                            ) : (
                              <span className="px-2 py-1 bg-[#1B2B5A]/10 text-[#1B2B5A] text-sm rounded">{p.category}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{editingProduct?.id === p.id ? <input type="text" value={editingProduct.dimensions} onChange={(e) => setEditingProduct({ ...editingProduct, dimensions: e.target.value })} className="px-2 py-1 border rounded" /> : p.dimensions}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              {editingProduct?.id === p.id ? (
                                <>
                                  <button onClick={() => saveProduct(editingProduct)} className="p-2 text-green-600 hover:bg-green-50 rounded">✓</button>
                                  <button onClick={() => setEditingProduct(null)} className="p-2 text-gray-600 hover:bg-gray-50 rounded">✕</button>
                                </>
                              ) : (
                                <>
                                  <button onClick={() => setEditingProduct(p)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
                                  <button onClick={() => deleteProduct(p.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">🗑️</button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Textes */}
            {activeTab === 'texts' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1B2B5A]">Textes du site</h2>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Section</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Clé</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valeur</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {texts.map((t) => (
                        <tr key={t.id}>
                          <td className="px-6 py-4"><span className="px-2 py-1 bg-[#B8923B]/10 text-[#B8923B] text-sm rounded">{t.section}</span></td>
                          <td className="px-6 py-4 text-sm font-mono text-gray-500">{t.key}</td>
                          <td className="px-6 py-4">{editingText?.id === t.id ? <textarea value={editingText.value} onChange={(e) => setEditingText({ ...editingText, value: e.target.value })} className="w-full px-2 py-1 border rounded" rows={2} /> : <p className="text-sm">{t.value}</p>}</td>
                          <td className="px-6 py-4">
                            {editingText?.id === t.id ? (
                              <div className="flex gap-2">
                                <button onClick={() => saveText(editingText)} className="p-2 text-green-600 hover:bg-green-50 rounded">✓</button>
                                <button onClick={() => setEditingText(null)} className="p-2 text-gray-600 hover:bg-gray-50 rounded">✕</button>
                              </div>
                            ) : (
                              <button onClick={() => setEditingText(t)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">✏️</button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Utilisateurs */}
            {activeTab === 'users' && currentUser?.role === 'admin' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1B2B5A]">Utilisateurs</h2>
                  <button onClick={() => setShowAddUser(true)} className="px-4 py-2 bg-[#B8923B] text-white rounded-lg hover:bg-[#9A7B32] flex items-center gap-2">+ Ajouter</button>
                </div>
                {showAddUser && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-[#1B2B5A] mb-4">Nouvel utilisateur</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Nom" value={newUser.name || ''} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} className="px-4 py-2 border rounded-lg" />
                      <input type="email" placeholder="Email" value={newUser.email || ''} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} className="px-4 py-2 border rounded-lg" />
                      <input type="password" placeholder="Mot de passe" value={newUser.password || ''} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} className="px-4 py-2 border rounded-lg" />
                      <select value={newUser.role || 'editor'} onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'admin' | 'editor' })} className="px-4 py-2 border rounded-lg">
                        <option value="editor">Éditeur</option>
                        <option value="admin">Administrateur</option>
                      </select>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button onClick={addUser} className="px-4 py-2 bg-green-600 text-white rounded-lg">Créer</button>
                      <button onClick={() => { setShowAddUser(false); setNewUser({}); }} className="px-4 py-2 bg-gray-200 rounded-lg">Annuler</button>
                    </div>
                  </div>
                )}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Utilisateur</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rôle</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((u) => (
                        <tr key={u.id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#1B2B5A] rounded-full flex items-center justify-center text-white font-bold">{u.name.charAt(0)}</div>
                              <span className="font-medium">{u.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-500">{u.email}</td>
                          <td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded ${u.role === 'admin' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>{u.role === 'admin' ? 'Admin' : 'Éditeur'}</span></td>
                          <td className="px-6 py-4">{u.id !== currentUser?.id && <button onClick={() => deleteUser(u.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">🗑️</button>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}