import React from 'react';
import './Card5.css'

function Card5() {
  return (
    <div className='card mt-2 shadow-lg card4'>
                <div className="card-body">
                    <div className='row'>
                        <div className="col-12 col-md-6">
                    <p className='rounded-2 connect'>Let's connect</p>
                    <h5 className="card-title">Enterprise Plan</h5>
                    <p>Effortlessly customized and fine-tune services as your nedd shift, ensuring the perfect tools for success</p>
                    <button className='con rounded-2'>Contact us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></button>
                </div>
                
                <div className='col-12 col-md-6'>
                    <p className='ps-3 mt-3'>What you will get:</p>
                    <div className='ps-3 d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                        <p className='ms-2 text1'>more than 75 users</p>
                    </div>
                    <div>
                    <p className='ms-4 text1'>customization of all other feature</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
  )
}

export default Card5