// "use client";
// import React, { useState } from "react";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     location: "",
//     industry: "",
//     message: "",
//     consent: false,
//     newsletter: false,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const target = e.target;
//     const value = target.type === 'checkbox' 
//       ? (target as HTMLInputElement).checked 
//       : target.value;
      
//     setFormData(prev => ({
//       ...prev,
//       [target.name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="flex justify-center items-center py-16 px-4 bg-white font-sans">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white rounded-lg"
//         style={{ fontFamily: "'Inter', sans-serif" }}
//       >
//         <h2 className="text-center text-3xl font-normal mb-10 text-gray-900 tracking-tight" 
//             style={{ fontFamily: "'Montserrat', sans-serif" }}>
//           Get in Touch
//         </h2>

//         {/* Row 1 */}
//         <div className="flex flex-col md:flex-row gap-5 mb-5">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name *"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name *"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//             required
//           />
//         </div>

//         {/* Row 2 */}
//         <div className="flex flex-col gap-5 mb-5">
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email *"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//           />
//           <input
//             type="text"
//             name="company"
//             placeholder="Your Company *"
//             value={formData.company}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//             required
//           />
//         </div>

//         {/* Row 3 */}
//         <div className="flex flex-col md:flex-row gap-5 mb-5">

//           <select
//             name="industry"
//             value={formData.industry}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900"
//             required
//           >
//             <option value="" className="text-gray-600">Industry *</option>
//             <option value="industry1">Industry 1</option>
//             <option value="industry2">Industry 2</option>
//           </select>
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <textarea
//             name="message"
//             placeholder="Message *"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-3 h-40 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
//             required
//           />
//         </div>

//         {/* Checkboxes */}
//         <div className="mb-8 text-gray-800">
//           <label className="flex items-start gap-3 mb-4">
//             <input
//               type="checkbox"
//               name="consent"
//               checked={formData.consent}
//               onChange={handleChange}
//               className="mt-1 h-5 w-5 text-gray-800 rounded border-gray-300 focus:ring-gray-500"
//             />
//             <span className="text-gray-800">
//               By ticking the box below, you consent to us storing your data in line
//               with our{" "}
//               <a href="#" className="text-gray-900 underline font-medium hover:text-gray-700">
//                 Privacy Policy
//               </a>{" "}
//               and using the information provided to contact you.
//             </span>
//           </label>

//           <label className="flex items-start gap-3">
//             <input
//               type="checkbox"
//               name="newsletter"
//               checked={formData.newsletter}
//               onChange={handleChange}
//               className="mt-1 h-5 w-5 text-gray-800 rounded border-gray-300 focus:ring-gray-500"
//             />
//             <span className="text-gray-800">I would like to receive communications from Texmo Blank.</span>
//           </label>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-gray-500 text-white py-4 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium tracking-wide"
//           style={{ fontFamily: "'Montserrat', sans-serif" }}
//         >
//           Send enquiry
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    industry: "",
    message: "",
    consent: false,
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' 
      ? (target as HTMLInputElement).checked 
      : target.value;
      
    setFormData(prev => ({
      ...prev,
      [target.name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center py-16 px-4 bg-white font-sans">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-lg"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <h2 className="text-center text-3xl font-normal mb-10 text-gray-900 tracking-tight" 
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Get in Touch
        </h2>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg text-gray-900 placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-5 mb-5">
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg text-gray-900 placeholder-gray-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg text-gray-900 placeholder-gray-400"
          />
          <input
            type="text"
            name="company"
            placeholder="Your Company *"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg text-gray-900"
            required
          >
            <option value="" className="text-gray-600">Industry *</option>
            <option value="industry1">Industry 1</option>
            <option value="industry2">Industry 2</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 h-48 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* Checkboxes */}
       {/* Checkboxes */}
<div className="mb-8 text-gray-800 text-lg">
  <label className="flex items-start gap-3 mb-4">
    <input
      type="checkbox"
      name="consent"
      checked={formData.consent}
      onChange={handleChange}
      className="mt-1 h-5 w-5 min-h-5 min-w-5 text-gray-800 rounded border-gray-300 focus:ring-gray-500"
    />
    <span className="text-gray-800">
      By ticking the box below, you consent to us storing your data in line
      with our{" "}
      <a href="#" className="text-gray-900 underline font-medium hover:text-gray-700">
        Privacy Policy
      </a>{" "}
      and using the information provided to contact you.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      name="newsletter"
      checked={formData.newsletter}
      onChange={handleChange}
      className="mt-1 h-5 w-5 min-h-5 min-w-5 text-gray-800 rounded border-gray-300 focus:ring-gray-500"
    />
    <span className="text-gray-800">I would like to receive communications from Texmo Blank.</span>
  </label>
</div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-5 rounded-xl hover:bg-gray-800 transition-colors duration-200 font-medium tracking-wide text-xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Send enquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;