import { useFormik } from 'formik';
import * as Yup from 'yup';

export function Signup() {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Adresse email invalide').required('Ce champ est requis'),
        username: Yup.string().required('Ce champ est requis'),
        password: Yup.string().required('Ce champ est requis').min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
            .required('Ce champ est requis'),
        firstname: Yup.string().required('Ce champ est requis'),
        lastname: Yup.string().required('Ce champ est requis'),
        phone: Yup.string().matches(/^[0-9\-]{14}$/, 'Numéro de téléphone invalide').required('Ce champ est requis'),
        city: Yup.string().required('Ce champ est requis'),
        street: Yup.string().required('Ce champ est requis'),
        number: Yup.string().required('Ce champ est requis'),
        zipcode: Yup.string().required('Ce champ est requis'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            repeatPassword: '',
            firstname: '',
            lastname: '',
            phone: '',
            city: '',
            street: '',
            number: '',
            zipcode: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="container flex justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96 sm:w-3/4">
                <h2 className="text-2xl font-semibold mb-4">Inscription</h2>
                <form onSubmit={formik.handleSubmit} className='grid gap-3 sm:grid-cols-2'>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...formik.getFieldProps('email')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Nom d'utilisateur
                        </label>
                        <input
                            id="username"
                            type="text"
                            {...formik.getFieldProps('username')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-sm">{formik.errors.username}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...formik.getFieldProps('password')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-600">
                            Répéter le mot de passe
                        </label>
                        <input
                            id="repeatPassword"
                            type="password"
                            {...formik.getFieldProps('repeatPassword')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                            <div className="text-red-500 text-sm">{formik.errors.repeatPassword}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
                            Prénom
                        </label>
                        <input
                            id="firstname"
                            type="text"
                            {...formik.getFieldProps('firstname')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.firstname && formik.errors.firstname ? (
                            <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
                            Nom de famille
                        </label>
                        <input
                            id="lastname"
                            type="text"
                            {...formik.getFieldProps('lastname')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.lastname && formik.errors.lastname ? (
                            <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                            Téléphone
                        </label>
                        <input
                            id="phone"
                            type="text"
                            {...formik.getFieldProps('phone')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                            Ville
                        </label>
                        <input
                            id="city"
                            type="text"
                            {...formik.getFieldProps('city')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className="text-red-500 text-sm">{formik.errors.city}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="street" className="block text-sm font-medium text-gray-600">
                            Rue
                        </label>
                        <input
                            id="street"
                            type="text"
                            {...formik.getFieldProps('street')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.street && formik.errors.street ? (
                            <div className="text-red-500 text-sm">{formik.errors.street}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="number" className="block text-sm font-medium text-gray-600">
                            Numéro de rue
                        </label>
                        <input
                            id="number"
                            type="text"
                            {...formik.getFieldProps('number')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.number && formik.errors.number ? (
                            <div className="text-red-500 text-sm">{formik.errors.number}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="zipcode" className="block text-sm font-medium text-gray-600">
                            Code postal
                        </label>
                        <input
                            id="zipcode"
                            type="text"
                            {...formik.getFieldProps('zipcode')}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {formik.touched.zipcode && formik.errors.zipcode ? (
                            <div className="text-red-500 text-sm">{formik.errors.zipcode}</div>
                        ) : null}
                    </div>
                    <div></div>

                    <div className="mb-4 self-center justify-self-center col-span-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            S'inscrire
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}