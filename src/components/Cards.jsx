import React from 'react'

function Cards({image}) {
    const tags = image.tags.split(',')
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-xl'>
    <img src={image.webformatURL} alt='' className="w-full"/>
    <div className='px-6 py-4'>
      <div className='font-bold text-purple-500 text-xl mb-2'>
        Photo by <span>{image.user}</span>
      </div>
      <ul>
        <li>
        <strong>Views: </strong><span>{image.views}</span>
         
        </li>
        <li>
        <strong>Download: </strong>
        {image.downloads}
        </li>
        <li>
        <strong>Likes: </strong>
        {image.likes}
        </li>
        <div className='px-6 py-4'>
            {tags.map((tag)=>(
               <span key={image.imageURL} className='inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2'>#{tag}</span>

            ))}

        </div>

      </ul>
    </div>
  </div>
  )
}

export default Cards
