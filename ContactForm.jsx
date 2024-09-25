const ContactForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        }
    };

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-pink-500 font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
                    <input name="name" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Your Email</label>
                    <input name="email" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required type="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">Your Message</label>
                    <textarea name="message" rows='4' className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
