import { useState } from "react";
import axios from "axios";
import './BottomNavbar.css'

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/contact-form-submit', {
        name,
        email,
        message: description
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setDescription('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="contact-me-wrapper min-h-[calc(100vh-100px)] flex flex-col flex-wrap justify-center items-left gap-4 w-[70%] text-white">
      
      <p className="contact-me-title mb-4 w-[20%] flex flex-row justify-center items-center border border-white/30 rounded-xl bg-white/10 backdrop-blur-md shadow-lg font-['Gilroy'] font-light text-2xl tracking-[2px] px-3 py-1">
        contact me
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        
        <div className="live-display w-full md:w-1/2 h-full p-4 border border-white/30 rounded-md bg-white/10 backdrop-blur-md shadow-lg hidden md:block">
          <pre className="magic-element whitespace-pre-wrap text-sm">
            {`🚀 ${name || "Sender"}
                📧 Recipient
                |✨ Subject

                Hello, intrepid traveler! 👋

                Across the cosmos, a message for you:

                "${description}"

                Wishing you stardust dreams,

                ${name || "Sender"}
            `}
          </pre>
        </div>
        
        <div className="contact-form w-full md:w-1/2 h-full p-4 border border-white/30 rounded-md bg-white/10 backdrop-blur-md shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="p-1.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-md text-white placeholder-white/50"
                required
              />
              
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="p-1.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-md text-white placeholder-white/50"
                required
              />
              
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Your Message"
                className="p-1.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-md text-white placeholder-white/50 h-28 resize-none"
                required
              />
              
              <button
                type="submit"
                className="p-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-md text-white hover:bg-white/30 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">Error sending message. Please try again.</p>
              )}

            </form>
        </div>
        
      </div>
    
    </div>
  )
}

export default ContactMe