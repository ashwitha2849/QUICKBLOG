import React,{useRef} from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";


const Header=() =>{

  const {setInput,input}=useAppContext()
  const inputRef=useRef()

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }
  const onClear=()=>{
    setInput('')
    inputRef.current.value=''
  }
  return (
    // 🚀 FIX: Apply animated gradient to the main container
    <div className="mx-8 sm:mx-16 xlmx-24 relative bg-gradient-to-r from-gray-50 via-indigo-50 to-gray-50 animate-gradient-xy min-h-[500px] pt-10 pb-20">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-indigo-400/50 bg-indigo-50/70 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600 tracking-wider">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-2.5 animate-pulse" alt="" />
        </div>
        <h1
          className="text-4xl sm:text-7xl font-extrabold 
               sm:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
        >
          Your Own <span className="text-primary">blogging</span> <br />
          platform
        </h1>
        <p
          className="mt-6 mb-10 max-w-3xl mx-auto text-lg font-light 
                    text-gray-500/90"
        >
          This is your space to,think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-xl max-sm:scale-90 mx-auto border-2 border-indigo-500/50 bg-white/80 backdrop-blur-sm shadow-2xl rounded-xl overflow-hidden p-1 hover:shadow-indigo-500/50 transition-shadow'>
          <input ref={inputRef}
            type="text"
            placeholder="Search for blogs or topics..."
            required
            className='w-full pl-4 bg-transparent text-gray-700 placeholder-gray-400 focus:ring-0 outline-none'
          />
          <button
            type="submit"
            className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md cursor-pointer'
          >
            Search
          </button>
        </form>
      </div>
      <div className='text-center'>
       {
       input &&  <button onClick={onClear}className='border border-gray-400 font-medium text-xs py-1.5 px-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-inner cursor-pointer'>Clear Search</button>
        }
      </div>

      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute =top-50 -z-1 opacity-70 scale-125"
      />
    </div>
  );
}

export default Header;