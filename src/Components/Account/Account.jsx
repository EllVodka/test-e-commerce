import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../Token/Token';

export function Account() {
    const [userData, setUserData] = useState({
        id: 1,
        email: '',
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: '',
        },
        address: {
            city: '',
            street: '',
            number: '',
            zipcode: '',
            geolocation: {
                lat: '',
                long: '',
            },
        },
        phone: '',
    });

    const { sub } = jwtDecode(getToken());
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/${sub}`).then((response) => {
            setUserData(response.data);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedUserData = { ...userData };

        if (name.startsWith('name.')) {
            const fieldName = name.split('.')[1];
            updatedUserData.name[fieldName] = value;
        }
        if(name.startsWith('address.')){
            const fieldName = name.split('.')[1];
            updatedUserData.address[fieldName] = value
        }
        else {
            // Sinon, mettez simplement à jour le champ directement dans userData
            updatedUserData[name] = value;
        }

        setUserData(updatedUserData);
    };


    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://fakestoreapi.com/users/${sub}`, userData).then((response) => {
            console.log('Données mises à jour avec succès !', response);
        });
        setIsEditing(false);
    };


    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Informations du compte</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={userData.username}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Mot de passe</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Prénom</label>
                                <input
                                    type="text"
                                    name="name.firstname"
                                    value={userData.name.firstname}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Nom de famille</label>
                                <input
                                    type="text"
                                    name="name.lastname"
                                    value={userData.name.lastname}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Téléphone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Ville</label>
                                <input
                                    type="text"
                                    name="address.city"
                                    value={userData.address.city}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Rue</label>
                                <input
                                    type="text"
                                    name="address.street"
                                    value={userData.address.street}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Numero de rue</label>
                                <input
                                    type="text"
                                    name="address.number"
                                    value={userData.address.number}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Code postal</label>
                                <input
                                    type="text"
                                    name="address.zipcode"
                                    value={userData.address.zipcode}
                                    onChange={handleChange}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Enregistrer les modifications
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <div className='grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Email</label>
                                <p className='font-semibold'>{userData.email}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Nom d'utilisateur</label>
                                <p className='font-semibold'>{userData.username}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Mot de passe</label>
                                <p className='font-semibold'>{userData.password}</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Prénom</label>
                                <p className='font-semibold mb-2'>{userData.name.firstname}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Nom de famille</label>
                                <p className='font-semibold mb-2'>{userData.name.lastname}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Téléphone</label>
                                <p className='font-semibold mb-2'>{userData.phone}</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Ville</label>
                                <p className='font-semibold mb-2'>{userData.address.city}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Rue</label>
                                <p className='font-semibold mb-2'>{userData.address.street}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Numero de rue</label>
                                <p className='font-semibold mb-2'>{userData.address.number}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Code postal</label>
                                <p className='font-semibold mb-2'>{userData.address.zipcode}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleEditClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Éditer <span role="img" aria-label="Stylo">✒️</span>
                    </button>
                </>
            )}
        </div>
    );
}
