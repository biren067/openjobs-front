import { Link } from "react-router-dom"
import { BriefcaseIcon, UserIcon } from "@heroicons/react/24/solid"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-600 text-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold">OpenJobs</span>
          </div>
          <nav className="hidden md:flex gap-8 text-lg">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/jobs" className="hover:text-green-200">Jobs</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/contact" className="hover:text-green-200">Contact</Link>
          </nav>
          <div className="flex gap-2">
            <Link to="/login" className="bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-100 transition">Login</Link>
            <Link to="/register" className="bg-green-800 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-50 py-16 flex-1">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
              Find Your Dream Job <br /> With <span className="text-green-600">OpenJobs</span>
            </h1>
            <p className="text-lg text-green-900 mb-6">
              Explore thousands of job opportunities from top companies. Start your career journey today!
            </p>
            <Link to="/jobs" className="bg-green-600 text-white px-6 py-3 rounded font-bold text-lg hover:bg-green-700 transition">
              Browse Jobs
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://img.freepik.com/free-vector/job-hunt-concept-illustration_114360-4044.jpg" alt="Hero" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-100 p-6 rounded-lg shadow text-center">
            <UserIcon className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p>Sign up as an applicant or recruiter to get started.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow text-center">
            <BriefcaseIcon className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Search & Apply</h3>
            <p>Browse jobs by category and apply with one click.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow text-center">
            <svg className="h-10 w-10 mx-auto text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0V7m0 4l-4-4m0 0l-4 4" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Get Hired</h3>
            <p>Connect with employers and land your dream job.</p>
          </div>
        </div>
      </section>

      {/* Popular Job Categories */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Popular Job Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
              <BriefcaseIcon className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <h4 className="font-semibold">IT & Software</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
              <BriefcaseIcon className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <h4 className="font-semibold">Marketing</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
              <BriefcaseIcon className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <h4 className="font-semibold">Finance</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
              <BriefcaseIcon className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <h4 className="font-semibold">Design</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Verified Employers</h3>
            <p>We partner only with trusted companies for your safety and growth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Easy Application</h3>
            <p>Apply to jobs with a single click and track your applications easily.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Career Support</h3>
            <p>Get tips, resources, and support for every step of your job search.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
              <p className="italic mb-4">"I found my dream job within a week! The process was smooth and easy."</p>
              <div className="font-semibold text-green-700">- Priya S.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
              <p className="italic mb-4">"As a recruiter, I hired great talent quickly. Highly recommended!"</p>
              <div className="font-semibold text-green-700">- Rahul M.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center border border-green-100">
              <p className="italic mb-4">"The support team helped me at every step. Thank you OpenJobs!"</p>
              <div className="font-semibold text-green-700">- Anjali K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 mt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <BriefcaseIcon className="h-6 w-6 text-white" />
            <span className="font-bold">OpenJobs</span>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} OpenJobs. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}