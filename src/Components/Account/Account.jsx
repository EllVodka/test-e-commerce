import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../Token/Token';
import { useFormik } from 'formik';
import * as Yup from 'yup';


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

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/${sub}`).then((response) => {
            setUserData(response.data);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        formik.handleChange(e);
    };


    const handleEditClick = () => {
        setIsEditing(true);
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Adresse email invalide').required('Ce champ est requis'),
        username: Yup.string().required('Ce champ est requis'),
        password: Yup.string().required('Ce champ est requis')
            .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
            .matches(/[a-zA-Z]/, 'Le mot de passe doit contenir au moins une lettre')
            .matches(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
            .required('Ce champ est requis'),
        firstname: Yup.string().required('Ce champ est requis'),
        lastname: Yup.string().required('Ce champ est requis'),
        phone: Yup.string().matches(/^[0-9\-]{14}$/, 'Numéro de téléphone invalide').required('Ce champ est requis'),
        city: Yup.string().required('Ce champ est requis'),
        street: Yup.string().required('Ce champ est requis'),
        number: Yup.string().required('Ce champ est requis'),
        zipcode: Yup.string().required('Ce champ est requis'),

    });

    const { sub } = jwtDecode(getToken());
    const [isEditing, setIsEditing] = useState(false);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: userData.email,
            username: userData.username,
            password: userData.password,
            firstname: userData.name.firstname,
            lastname: userData.name.lastname,
            phone: userData.phone,
            city: userData.address.city,
            street: userData.address.street,
            number: userData.address.number,
            zipcode: userData.address.zipcode
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.put(`https://fakestoreapi.com/users/${sub}`, values)
                .then((response) => {
                    console.log('Données mises à jour avec succès !', response);
                    setIsEditing(false);
                })
                .catch((error) => {
                    console.error('Erreur lors de la mise à jour des données', error);
                });
        },

    });

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Informations du compte</h2>
            {isEditing ? (
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div className="text-red-500">{formik.errors.username}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Mot de passe</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500">{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Prénom</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={formik.values.firstname}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.firstname && formik.errors.firstname ? (
                                    <div className="text-red-500">{formik.errors.firstname}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Nom de famille</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={formik.values.lastname}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.lastname && formik.errors.lastname ? (
                                    <div className="text-red-500">{formik.errors.lastname}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Téléphone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className="text-red-500">{formik.errors.phone}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 bg-blue-200 text rounded-xl p-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Ville</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="text-red-500">{formik.errors.city}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Rue</label>
                                <input
                                    type="text"
                                    name="street"
                                    value={formik.values.street}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.street && formik.errors.street ? (
                                    <div className="text-red-500">{formik.errors.street}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Numero de rue</label>
                                <input
                                    type="text"
                                    name="number"
                                    value={formik.values.number}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.number && formik.errors.number ? (
                                    <div className="text-red-500">{formik.errors.number}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Code postal</label>
                                <input
                                    type="text"
                                    name="zipcode"
                                    value={formik.values.zipcode}
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border border-gray-300 px-3 py-2 rounded"
                                    required
                                />
                                {formik.touched.zipcode && formik.errors.zipcode ? (
                                    <div className="text-red-500">{formik.errors.zipcode}</div>
                                ) : null}
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
