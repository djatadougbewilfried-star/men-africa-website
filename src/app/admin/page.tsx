'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';

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
  price?: string;
}

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

interface SiteText {
  id: string;
  section: string;
  key: string;
  value: string;
}

// Fonction pour charger les données depuis localStorage (côté client uniquement)
function getStoredData<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const stored = localStorage.getItem(`menafrica_${key}`);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// Fonction pour obtenir la session
function getStoredSession(): User | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem('menafrica_session');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

// Données initiales avec les vraies adresses email
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
  { id: '3', section: 'Accueil', key: 'hero_description', value: 'Votre partenaire de confiance pour tous vos projets de construction en Côte d\'Ivoire' },
  { id: '4', section: 'À Propos', key: 'company_description', value: 'Men Africa Company est une entreprise ivoirienne spécialisée dans le BTP et la fabrication de produits en béton manufacturé.' },
  { id: '5', section: 'Contact', key: 'phone', value: '+225 07 07 02 01 45' },
  { id: '6', section: 'Contact', key: 'email', value: 'MENAFRICA@company-sites.net' },
  { id: '7', section: 'Contact', key: 'address', value: 'Cocody, Riviera Palmeraie, 21 BP 1831 Abidjan 21' },
];

const defaultContacts: ContactRequest[] = [
  { id: '1', name: 'Kouamé Yao', email: 'kouame@example.com', phone: '+225 07 00 00 00', subject: 'Devis pavés', message: 'Bonjour, je souhaite un devis pour 500m² de pavés autobloquants.', date: '2024-02-06', status: 'new' },
  { id: '2', name: 'Société ABC Construction', email: 'contact@abc.ci', phone: '+225 05 00 00 00', subject: 'Commande bordures', message: 'Nous avons besoin de 200 unités de bordures T1 pour un chantier à Cocody.', date: '2024-02-05', status: 'read' },
];

export default function AdminPage() {
  // Initialisation avec les données du localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => getStoredSession() !== null);
  const [currentUser, setCurrentUser] = useState<User | null>(() => getStoredSession());
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState<User[]>(() => getStoredData('users', defaultUsers));
  const [products, setProducts] = useState<Product[]>(() => getStoredData('products', defaultProducts));
  const [texts, setTexts] = useState<SiteText[]>(() => getStoredData('texts', defaultTexts));
  const [contacts, setContacts] = useState<ContactRequest[]>(() => getStoredData('contacts', defaultContacts));
  
  // Login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Edit states
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingText, setEditingText] = useState<SiteText | null>(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  // New product/user form
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [newUser, setNewUser] = useState<Partial<User>>({});

  // Save to localStorage
  const saveData = useCallback((key: string, data: unknown) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`menafrica_${key}`, JSON.stringify(data));
    }
  }, []);

  // Login handler
  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setLoginError('');
      if (typeof window !== 'undefined') {
        localStorage.setItem('menafrica_session', JSON.stringify(user));
      }
    } else {
      setLoginError('Email ou mot de passe incorrect');
    }
  }, [users, email, password]);

  // Logout
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('menafrica_session');
    }
  }, []);

  // Product CRUD
  const saveProduct = useCallback((product: Product) => {
    const updated = products.map(p => p.id === product.id ? product : p);
    setProducts(updated);
    saveData('products', updated);
    setEditingProduct(null);
  }, [products, saveData]);

  const addProduct = useCallback(() => {
    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name || '',
      category: newProduct.category || '',
      description: newProduct.description || '',
      dimensions: newProduct.dimensions || '',
      image: newProduct.image || '/catalogue/default.jpg',
    };
    const updated = [...products, product];
    setProducts(updated);
    saveData('products', updated);
    setNewProduct({});
    setShowAddProduct(false);
  }, [products, newProduct, saveData]);

  const deleteProduct = useCallback((id: string) => {
    if (confirm('Supprimer ce produit ?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      saveData('products', updated);
    }
  }, [products, saveData]);

  // Text CRUD
  const saveText = useCallback((text: SiteText) => {
    const updated = texts.map(t => t.id === text.id ? text : t);
    setTexts(updated);
    saveData('texts', updated);
    setEditingText(null);
  }, [texts, saveData]);

  // Contact status
  const updateContactStatus = useCallback((id: string, status: ContactRequest['status']) => {
    const updated = contacts.map(c => c.id === id ? { ...c, status } : c);
    setContacts(updated);
    saveData('contacts', updated);
  }, [contacts, saveData]);

  // User CRUD
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
      alert('Vous ne pouvez pas supprimer votre propre compte');
      return;
    }
    if (confirm('Supprimer cet utilisateur ?')) {
      const updated = users.filter(u => u.id !== id);
      setUsers(updated);
      saveData('users', updated);
    }
  }, [users, currentUser, saveData]);

  // Stats calculées
  const newContactsCount = useMemo(() => contacts.filter(c => c.status === 'new').length, [contacts]);

  // Login Screen
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

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 text-center">
              <strong>Accès administrateur</strong><br />
              Contactez l&apos;équipe technique pour vos identifiants
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1B2B5A] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#B8923B] rounded-lg flex items-center justify-center font-bold">
              MA
            </div>
            <div>
              <h1 className="font-bold">Men Africa Admin</h1>
              <p className="text-xs text-white/70">Panneau d&apos;administration</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">{currentUser?.name}</span>
            <span className="px-2 py-1 bg-[#B8923B] text-xs rounded">{currentUser?.role}</span>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Déconnexion"
            >
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
                { id: 'products', icon: '📦', label: 'Produits' },
                { id: 'texts', icon: '📝', label: 'Textes du site' },
                { id: 'contacts', icon: '📬', label: 'Demandes de contact' },
                { id: 'users', icon: '👥', label: 'Utilisateurs', adminOnly: true },
              ].map((item) => {
                if (item.adminOnly && currentUser?.role !== 'admin') return null;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#1B2B5A] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {item.id === 'contacts' && newContactsCount > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {newContactsCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1B2B5A]">Tableau de bord</h2>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Produits', value: products.length, icon: '📦', color: 'bg-blue-500' },
                    { label: 'Nouvelles demandes', value: newContactsCount, icon: '📬', color: 'bg-red-500' },
                    { label: 'Total demandes', value: contacts.length, icon: '📋', color: 'bg-green-500' },
                    { label: 'Utilisateurs', value: users.length, icon: '👥', color: 'bg-purple-500' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-500 text-sm">{stat.label}</p>
                          <p className="text-3xl font-bold text-[#1B2B5A]">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent contacts */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-[#1B2B5A] mb-4">Dernières demandes</h3>
                  <div className="space-y-3">
                    {contacts.slice(0, 5).map((contact) => (
                      <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-sm text-gray-500">{contact.subject}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded ${
                          contact.status === 'new' ? 'bg-red-100 text-red-600' :
                          contact.status === 'read' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {contact.status === 'new' ? 'Nouveau' : contact.status === 'read' ? 'Lu' : 'Répondu'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Products */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1B2B5A]">Gestion des produits</h2>
                  <button
                    onClick={() => setShowAddProduct(true)}
                    className="px-4 py-2 bg-[#B8923B] text-white rounded-lg hover:bg-[#9A7B32] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ajouter un produit
                  </button>
                </div>

                {/* Add Product Form */}
                {showAddProduct && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-[#1B2B5A] mb-4">Nouveau produit</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nom du produit"
                        value={newProduct.name || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Catégorie"
                        value={newProduct.category || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Dimensions"
                        value={newProduct.dimensions || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, dimensions: e.target.value })}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Chemin image (/catalogue/...)"
                        value={newProduct.image || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <textarea
                        placeholder="Description"
                        value={newProduct.description || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        className="col-span-2 px-4 py-2 border rounded-lg"
                        rows={2}
                      />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={addProduct}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Enregistrer
                      </button>
                      <button
                        onClick={() => { setShowAddProduct(false); setNewProduct({}); }}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                )}

                {/* Products List */}
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
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="px-6 py-4">
                            <div className="w-16 h-16 relative bg-gray-100 rounded">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {editingProduct?.id === product.id ? (
                              <input
                                type="text"
                                value={editingProduct.name}
                                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                className="px-2 py-1 border rounded w-full"
                              />
                            ) : (
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-gray-500">{product.description}</p>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editingProduct?.id === product.id ? (
                              <input
                                type="text"
                                value={editingProduct.category}
                                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                className="px-2 py-1 border rounded"
                              />
                            ) : (
                              <span className="px-2 py-1 bg-[#1B2B5A]/10 text-[#1B2B5A] text-sm rounded">{product.category}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {editingProduct?.id === product.id ? (
                              <input
                                type="text"
                                value={editingProduct.dimensions}
                                onChange={(e) => setEditingProduct({ ...editingProduct, dimensions: e.target.value })}
                                className="px-2 py-1 border rounded"
                              />
                            ) : (
                              product.dimensions
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              {editingProduct?.id === product.id ? (
                                <>
                                  <button
                                    onClick={() => saveProduct(editingProduct)}
                                    className="p-2 text-green-600 hover:bg-green-50 rounded"
                                  >
                                    ✓
                                  </button>
                                  <button
                                    onClick={() => setEditingProduct(null)}
                                    className="p-2 text-gray-600 hover:bg-gray-50 rounded"
                                  >
                                    ✕
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => setEditingProduct(product)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                                    title="Modifier"
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    onClick={() => deleteProduct(product.id)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                                    title="Supprimer"
                                  >
                                    🗑️
                                  </button>
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

            {/* Texts */}
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
                      {texts.map((text) => (
                        <tr key={text.id}>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-[#B8923B]/10 text-[#B8923B] text-sm rounded">{text.section}</span>
                          </td>
                          <td className="px-6 py-4 text-sm font-mono text-gray-500">{text.key}</td>
                          <td className="px-6 py-4">
                            {editingText?.id === text.id ? (
                              <textarea
                                value={editingText.value}
                                onChange={(e) => setEditingText({ ...editingText, value: e.target.value })}
                                className="w-full px-2 py-1 border rounded"
                                rows={2}
                              />
                            ) : (
                              <p className="text-sm">{text.value}</p>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editingText?.id === text.id ? (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => saveText(editingText)}
                                  className="p-2 text-green-600 hover:bg-green-50 rounded"
                                >
                                  ✓
                                </button>
                                <button
                                  onClick={() => setEditingText(null)}
                                  className="p-2 text-gray-600 hover:bg-gray-50 rounded"
                                >
                                  ✕
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setEditingText(text)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                              >
                                ✏️
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Contacts */}
            {activeTab === 'contacts' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1B2B5A]">Demandes de contact</h2>
                
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className={`bg-white rounded-xl shadow-sm p-6 ${contact.status === 'new' ? 'border-l-4 border-[#B8923B]' : ''}`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-[#1B2B5A]">{contact.name}</h3>
                            <span className={`px-2 py-1 text-xs rounded ${
                              contact.status === 'new' ? 'bg-red-100 text-red-600' :
                              contact.status === 'read' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {contact.status === 'new' ? 'Nouveau' : contact.status === 'read' ? 'Lu' : 'Répondu'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">
                            {contact.email} • {contact.phone} • {contact.date}
                          </p>
                          <p className="font-medium text-[#B8923B] mb-2">{contact.subject}</p>
                          <p className="text-gray-600">{contact.message}</p>
                        </div>
                        <div className="flex gap-2">
                          <select
                            value={contact.status}
                            onChange={(e) => updateContactStatus(contact.id, e.target.value as ContactRequest['status'])}
                            className="px-3 py-2 border rounded-lg text-sm"
                          >
                            <option value="new">Nouveau</option>
                            <option value="read">Lu</option>
                            <option value="replied">Répondu</option>
                          </select>
                          <a
                            href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                            className="px-4 py-2 bg-[#1B2B5A] text-white rounded-lg hover:bg-[#2A3F7A] text-sm"
                          >
                            Répondre
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Users */}
            {activeTab === 'users' && currentUser?.role === 'admin' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1B2B5A]">Gestion des utilisateurs</h2>
                  <button
                    onClick={() => setShowAddUser(true)}
                    className="px-4 py-2 bg-[#B8923B] text-white rounded-lg hover:bg-[#9A7B32] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ajouter un utilisateur
                  </button>
                </div>

                {/* Add User Form */}
                {showAddUser && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-[#1B2B5A] mb-4">Nouvel utilisateur</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nom complet"
                        value={newUser.name || ''}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email || ''}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="password"
                        placeholder="Mot de passe"
                        value={newUser.password || ''}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <select
                        value={newUser.role || 'editor'}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'admin' | 'editor' })}
                        className="px-4 py-2 border rounded-lg"
                      >
                        <option value="editor">Éditeur</option>
                        <option value="admin">Administrateur</option>
                      </select>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={addUser}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Créer
                      </button>
                      <button
                        onClick={() => { setShowAddUser(false); setNewUser({}); }}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                )}

                {/* Users List */}
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
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#1B2B5A] rounded-full flex items-center justify-center text-white font-bold">
                                {user.name.charAt(0)}
                              </div>
                              <span className="font-medium">{user.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-500">{user.email}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs rounded ${
                              user.role === 'admin' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                            }`}>
                              {user.role === 'admin' ? 'Administrateur' : 'Éditeur'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {user.id !== currentUser?.id && (
                              <button
                                onClick={() => deleteUser(user.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                              >
                                🗑️
                              </button>
                            )}
                          </td>
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