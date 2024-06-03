import React from 'react'

const Home = () => {
    return (
        <>
            <div className='w-full h-lvh' style={{
                backgroundImage: "url('https://img.freepik.com/free-vector/bokeh-defocused-background_23-2148497833.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

                <div className="cardContainer1 w-1/3">
                    <div className="col1 flex flex-col ml-3 ">
                        <img
                            className="h-20 w-4/5 mb-2"
                            src="https://media.istockphoto.com/id/165028040/vector/canadian-flag-vector.jpg?s=612x612&w=0&k=20&c=UAovew36OC60VVtij55DGwpuRYm8l_c7JWdCnt5ZN7A="
                            alt="Canadian Flag"
                        />

                        <img
                            className="h-20 w-4/5 mb-2"
                            src="https://media.istockphoto.com/id/165028040/vector/canadian-flag-vector.jpg?s=612x612&w=0&k=20&c=UAovew36OC60VVtij55DGwpuRYm8l_c7JWdCnt5ZN7A="
                            alt="Canadian Flag"
                        />
                        <img
                            className="h-20 w-4/5 mb-2"
                            src="https://media.istockphoto.com/id/165028040/vector/canadian-flag-vector.jpg?s=612x612&w=0&k=20&c=UAovew36OC60VVtij55DGwpuRYm8l_c7JWdCnt5ZN7A="
                            alt="Canadian Flag"
                        />
                    </div>
                </div>
                <div className="cardContainer2 w-1/3">
                    <div className="col1">

                    </div>
                </div>
                <div className="cardContainer2 w-1/3">
                    <div className="col1">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home