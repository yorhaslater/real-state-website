import React from 'react'
import { toast } from 'react-toastify'

const Contacto = () => {

    const [result, setResult] = React.useState("")

    const onSubmit = async (event) => {
        event.preventDefault()

        setResult("Enviando...")

        const formData = new FormData(event.target)

        formData.append(
            "access_key",
            "beef6978-6584-4b2f-9dd9-b164bc3d171a"
        )

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        )

        const data = await response.json()

        if (data.success) {
            setResult("")
            toast.success("Mensaje enviado correctamente")
            event.target.reset()
        } else {
            console.log("Error", data)
            toast.error(data.message)
            setResult("")
        }
    }

    return (
        <div
            className='text-center py-24 px-6 lg:px-32 w-full overflow-hidden'
            id='Contacto'>
            <div
                className='max-w-4xl mx-auto animate-fade-up'>
                <p className='text-xs tracking-[0.3em] text-gray-400 uppercase mb-4'>
                    Contáctanos
                </p>

                <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800'>
                    Construyamos tu futuro juntos
                </h1>

                <div className='w-16 h-[1px] bg-gray-300 mx-auto my-6'></div>

                <p className='text-gray-500 max-w-xl mx-auto text-sm leading-relaxed mb-12'>
                    Estamos listos para ayudarte a encontrar la propiedad ideal.
                    Déjanos un mensaje y nos pondremos en contacto contigo.
                </p>

                <div
                    className='bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500'>
                    <form
                        onSubmit={onSubmit}
                        className='max-w-2xl mx-auto text-gray-600'>
                        <div className='flex flex-wrap gap-y-6'>

                            <div className='w-full md:w-1/2 text-left'>
                                <label className='font-medium text-gray-700'>
                                    Tu nombre
                                </label>

                                <input
                                    className='w-full border border-gray-200 rounded-lg py-3 px-4 mt-2
                                    transition-all duration-300 ease-in-out
                                    focus:outline-none focus:border-gray-500
                                    focus:ring-4 focus:ring-gray-200
                                    hover:border-gray-400'
                                    type="text"
                                    name="name"
                                    placeholder='Tu nombre'
                                    required/>
                            </div>

                            <div className='w-full md:w-1/2 text-left md:pl-4'>
                                <label className='font-medium text-gray-700'>
                                    Tu correo electrónico
                                </label>

                                <input
                                    className='w-full border border-gray-200 rounded-lg py-3 px-4 mt-2
                                    transition-all duration-300 ease-in-out
                                    focus:outline-none focus:border-gray-500
                                    focus:ring-4 focus:ring-gray-200
                                    hover:border-gray-400'
                                    type="email"
                                    name="email"
                                    placeholder='Tu correo electrónico'
                                    required/>
                            </div>

                        </div>

                        <div className='my-6 text-left'>
                            <label className='font-medium text-gray-700'>
                                Mensaje
                            </label>

                            <textarea
                                className='w-full border border-gray-200 rounded-lg py-3 px-4 mt-2 h-48 resize-none
                                transition-all duration-300 ease-in-out
                                focus:outline-none focus:border-gray-500
                                focus:ring-4 focus:ring-gray-200
                                hover:border-gray-400'
                                name="message"
                                placeholder='Escribe tu mensaje aquí...'
                                required/>
                        </div>

                        <button
                            type="submit"
                            className='mt-2 px-8 py-4 bg-gray-900 text-white text-sm rounded-lg
                            hover:bg-black hover:-translate-y-1
                            active:translate-y-0
                            transition-all duration-300
                            shadow-md hover:shadow-xl'>
                            {result ? result : "Enviar mensaje"}
                        </button>

                        <p className='mt-4 text-sm text-center text-gray-600'>
                            {result}
                        </p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacto