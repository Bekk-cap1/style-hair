
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import './App.scss';
import { useEffect, useRef, useState } from 'react';
import Barbershop from './image/barbershop.png'
import Basket from './image/basket.png'

function App() {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  const [count, setCount] = useState(1)

  const handleSlideChange = (swiper) => {
    const direction = swiper.swipeDirection;

    if (direction === 'next') {
      setCount((count) => count + 1);
    } else if (direction === 'prev') {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="container__inner">
          <div className="container__inner__left">
            <h2>Kasmir</h2>
            <div className='inner__left__right'>
              <div className="swiper-button-prev" onClick={()=>count > 1 ? setCount(count - 1) : setCount(count)}></div>
              <h4 className='change__number' style={count == 6 ? {opacity: '0.5'} : {}}>{count !== 6 ? "0" + count : "0" + (count-1)}</h4>
              <div className="slider__line" id="slider">
                <div className="slider__handle" style={{ transform: `translateY(${(count-1) * 100}%)`}} id="handle"></div>
              </div>
              <h4 className='six' style={count !== 6 ? {opacity: '0.5'} : {} }>06</h4>
              <div className="swiper-button-next" onClick={()=>count < 6 ? setCount(count + 1) : setCount(count)}></div>
              {/* <button onClick={()=>count < 6 ? setCount(count + 1) : setCount(count)}>111</button> */}
            </div>
          </div>

          <div className="container__inner__right">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              onSlideChange={handleSlideChange}
              direction='vertical'
              style={{ height: '900px' }}
            >
              <SwiperSlide>
                <div className="left__style">
                  <div className="image__container">
                    <img src={Barbershop} alt="Hair Style" />
                    <p className="overlay"><b>The Best Hair Style 2021</b></p>
                  </div>
                  <ul className="left__text">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>
                <div className="right__style">
                  <ul>
                    <li>Home</li>
                    <li>Style Hair</li>
                    <li>Models</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    <li><img src={Basket} alt="" /></li>
                  </ul>
                  <div>
                    <h1>Lorem ipsum dolor sit amet!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.</p>
                    <button>Shopping Now</button>
                  </div>
                  <p className='last__text'>{"0" + count}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="left__style">
                  <div className="image__container">
                    <img src={Barbershop} alt="Hair Style" />
                    <p className="overlay"><b>The Best Hair Style 2021</b></p>
                  </div>
                  <ul className="left__text">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>
                <div className="right__style">
                  <ul>
                    <li>Home</li>
                    <li>Style Hair</li>
                    <li>Models</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    <li><img src={Basket} alt="" /></li>
                  </ul>
                  <div>
                    <h1>Lorem ipsum dolor sit amet!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.</p>
                    <button>Shopping Now</button>
                  </div>
                  <p className='last__text'>{"0" + count}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="left__style">
                  <div className="image__container">
                    <img src={Barbershop} alt="Hair Style" />
                    <p className="overlay"><b>The Best Hair Style 2021</b></p>
                  </div>
                  <ul className="left__text">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>
                <div className="right__style">
                  <ul>
                    <li>Home</li>
                    <li>Style Hair</li>
                    <li>Models</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    <li><img src={Basket} alt="" /></li>
                  </ul>
                  <div>
                    <h1>Lorem ipsum dolor sit amet!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.</p>
                    <button>Shopping Now</button>
                  </div>
                  <p className='last__text'>{"0" + count}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="left__style">
                  <div className="image__container">
                    <img src={Barbershop} alt="Hair Style" />
                    <p className="overlay"><b>The Best Hair Style 2021</b></p>
                  </div>
                  <ul className="left__text">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>
                <div className="right__style">
                  <ul>
                    <li>Home</li>
                    <li>Style Hair</li>
                    <li>Models</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    <li><img src={Basket} alt="" /></li>
                  </ul>
                  <div>
                    <h1>Lorem ipsum dolor sit amet!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.</p>
                    <button>Shopping Now</button>
                  </div>
                  <p className='last__text'>{"0" + count}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="left__style">
                  <div className="image__container">
                    <img src={Barbershop} alt="Hair Style" />
                    <p className="overlay"><b>The Best Hair Style 2021</b></p>
                  </div>
                  <ul className="left__text">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>
                <div className="right__style">
                  <ul>
                    <li>Home</li>
                    <li>Style Hair</li>
                    <li>Models</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    <li><img src={Basket} alt="" /></li>
                  </ul>
                  <div>
                    <h1>Lorem ipsum dolor sit amet!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.</p>
                    <button>Shopping Now</button>
                  </div>
                  <p className='last__text'>{"0" + count}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="left__style">
                  <div className="image__container">
                    <img src={Barbershop} alt="Hair Style" />
                    <p className="overlay"><b>The Best Hair Style 2021</b></p>
                  </div>
                  <ul className="left__text">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                  </ul>
                </div>
                <div className="right__style">
                  <ul>
                    <li>Home</li>
                    <li>Style Hair</li>
                    <li>Models</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    <li><img src={Basket} alt="" /></li>
                  </ul>
                  <div>
                    <h1>Lorem ipsum dolor sit amet!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.</p>
                    <button>Shopping Now</button>
                  </div>
                  <p className='last__text'>{"0" + count}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
