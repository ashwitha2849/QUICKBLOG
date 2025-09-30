import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
// ⚠️ FIX 1: Import toast for success/error messages
import toast from 'react-hot-toast'; 

const CommentTableItem = ({comment,fetchComments}) => {
    // Destructuring BLogDate is inconsistent; better to define it as 'blogDate'
    const {blog,createdAt,_id} = comment;
    // Naming convention change for clarity
    const blogDate = new Date(createdAt); 

    const { axios }= useAppContext();

    const approveComment = async ()=>{
      try{
        // ⚠️ FIX 2: Corrected API endpoint typo from '/api/dmin/' to '/api/admin/'
        const {data} = await axios.post('/api/admin/approve-comment',{id:_id}) 
        if (data.success) {
          toast.success(data.message)
          fetchComments()
        }else{
          toast.error(data.message)
        }
      }catch (error) {
        toast.error(error.message || 'Error approving comment.')
      }
    }

    const deleteComment = async ()=>{
      try{
        const confirm = window.confirm('Are you sure you want to delete this comment?');
        if(!confirm) return;
        
        // ⚠️ FIX 3 & 4: Corrected API endpoint typo to '/api/admin/' AND 
        // changed the route name to 'delete-comment' (or similar, assuming a standard API structure)
        const {data} = await axios.post('/api/admin/delete-comment',{id:_id}) 
        
        if (data.success) {
          toast.success(data.message)
          fetchComments()
        }else{
          toast.error(data.message)
        }
      }catch (error) {
        toast.error(error.message || 'Error deleting comment.')
      }
    }

    return (
      // Border typo corrected: 'order-y' to 'border-y'
      <tr className='border-y border-gray-300'> 
          <td className='px-6 py-4'>
              <b className='font-medium text-gray-600'>Blog</b> : {blog.title}
              <br/>
              <br/>
              <b className='font-medium text-gray-600'>Name</b> : {comment.name}
              <br/>
              <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
          </td>
        <td className='px-6 py-4 max-sm:hidden'>
          {/* Using blogDate for date display */}
          {blogDate.toLocaleDateString()}
        </td>
        <td className='px-6 py-4'>
          <div className='flex items-center gap-4'> 
              {/* Approve Button / Status */}
              {!comment.isApproved ?
              <img 
                onClick={approveComment} 
                src={assets.tick_icon} 
                className='w-5 hover:scale-110 transition-all cursor-pointer'
                alt="Approve"
              /> 
              : 
              <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>
                Approved
              </p>
              }
              {/* Delete Button */}
              <img 
                onClick={deleteComment}
                src={assets.bin_icon} 
                alt="Delete" 
                className='w-5 hover:scale-110 transition-all cursor-pointer'
              />
          </div>
        </td>
      </tr>
    )
}

export default CommentTableItem