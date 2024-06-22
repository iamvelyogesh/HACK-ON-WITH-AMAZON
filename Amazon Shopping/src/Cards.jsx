import React from 'react';

const Cards = () => {
    return (
        <div className='flex justify-center mt-80' > {/* Changed margin top to mt-9 */}
    {/* Added flex and justify-between */}
             
    <div className='card1 h-[380px] w-[350px] bg-white mx-5 flex flex-col justify-center items-center'> {/* Added flex, flex-col, justify-center, and items-center */}
                <h2 className='text-2xl my-4 text-center font-bold'>Pick up where you left off</h2>
                <div className='flex justify-evenly w-full'> {/* Added flex and justify-evenly */}
                    <div className='flex flex-col items-center'> {/* Added flex and flex-col for left images */}
                        <img src="https://m.media-amazon.com/images/I/614Nfn8S5fL._AC_SY110_.jpg" alt="Gaming accessories" />
                        <p>Shoe Racks</p>
                        <br></br>
                        <img src="https://m.media-amazon.com/images/I/71SqWbFm71L._AC_SY110_.jpg" alt="Gaming accessories" />
                        <p>Shoe Racks - 4  </p>
                    </div>
                    <div className='flex flex-col items-center'> {/* Added flex and flex-col for right images */}
                        <img src="https://m.media-amazon.com/images/I/71myM86OxCL._AC_SY110_.jpg" alt="Gaming accessories" />
                        <p>Shoe Racks - 6 shelf </p>
                        <br></br>
                        <img src="https://m.media-amazon.com/images/I/81n8gLQKysL._AC_SY110_.jpg" alt="Gaming accessories" />
                        <p>Shoe Racks with closed</p>
                    </div>
                </div>
                <p className='text-blue-500 text-center mx-auto my-2'>See More</p>
            </div>
            <div className='card1 h-[390px] w-[370px] bg-white mx-5 flex flex-col justify-center items-center'> {/* Changed mx-11 to mx-4 */}
                <h2 className='text-2xl my-4 text-center font-bold'>Keep shopping for</h2>
                <div className='flex justify-evenly w-full'> {/* Added flex and justify-evenly */}
                    <div className='flex flex-col items-center'> {/* Added flex and flex-col for left images */}
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/714gdRQ2pJL._AC_UL100_SR100,100_.jpg" alt="Gaming accessories" />
                        <p>Smart Watches</p>
                        <input type="text" className="font-normal w-13 h-5 text-center" placeholder="5 viewed" />
                        < br></br>
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/71hwy879ipL._AC_UL100_SR100,100_.jpg" alt="Gaming accessories" />
                        <p>Flax seeds</p>
                        <input type="text" className="font-normal w-13 h-5 text-center" placeholder="1 viewed" />
                    </div>
                    <div className='flex flex-col items-center'> {/* Added flex and flex-col for right images */}
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/81IY3x1ao9L._AC_UL100_SR100,100_.jpg" alt="Gaming accessories" />
                        <p>Women Watches</p>
                        <input type="text" className="font-normal w-13 mr-8 text-center" placeholder="7 viewed" />
                       < br></br>
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/51H+4llmbHL._AC_UL100_SR100,100_.jpg" alt="Gaming accessories" />
                        <p>Closet</p>
                        <input type="text" className="font-normal w-13 h-5 text-center" placeholder="2 viewed" />
                    </div>
                </div>
                <p className='text-blue-500 text-center mx-auto my-2'>View your browsing history</p> {/* Changed my-5 to my-2 */}
            </div>
            <div className='card1 h-[380px] w-[340px] bg-white mx-4'> {/* Changed mx-11 to mx-4 */}
                <h2 className='text-2xl my-3 text-center font-bold'>Continue shopping deals</h2>
                < br></br>
                <div className='flex justify-evenly w-full'> {/* Added flex and justify-evenly */}
                    <div className='flex flex-col items-center'> {/* Added flex and flex-col for left images */}
                        <img src="https://m.media-amazon.com/images/I/61+-gmnJT2L._AC_SY95_.jpg" alt="Gaming accessories" />
                        < br></br>
                        < br></br>
                        <img src="https://m.media-amazon.com/images/I/611eguLOWEL._AC_SY110_.jpg" alt="Gaming accessories" />
                    </div>
                    <div className='flex flex-col items-center'> {/* Added flex and flex-col for right images */}
                        <img src="https://m.media-amazon.com/images/I/51ei79fht0L._AC_SY95_.jpg" alt="Gaming accessories" />
                        < br></br>
                        < br></br>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/June/BTF/17th/Pcqc3-4-low._SY116_CB555273362_.jpg" alt="Gaming accessories" />
                    </div>
                </div>
                <p className='text-blue-500 text-center mx-auto my-2'>See all deals</p> 
            </div>
        </div>
    );
};

export default Cards;
