import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cream-500 to-cream-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-lg p-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Get in Touch
        </h1>

        <p className="text-gray-600 text-lg text-center mb-8">
          Have questions or need assistance? Fill out the form below, and we'll get back to you promptly.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Contact Number"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Inquiry about services"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Type your message here..."
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:opacity-90 transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12 border-t pt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help Immediately?</h2>
          <p className="text-gray-600 mb-4">
            Reach out to our support team directly:
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              📧 <a href="mailto:skillhive.edu@outlook.com" className="text-indigo-600 hover:underline">skillhive.edu@outlook.com</a>
            </p>
            <p className="text-gray-700">
              📞 <a href="tel:+91(7292098292)" className="text-indigo-600 hover:underline">+91 7292098292</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
