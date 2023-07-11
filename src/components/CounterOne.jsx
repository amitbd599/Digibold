import React from 'react'

const CounterOne = () => {
  return (
    <>
    {/* Counter area start */}
    <section className="counter__area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="counter__inner">
              <div className="counter__item" data-aos="fade-right">
                <div className="counter__number counter_slow">
                  200+ <span>200+</span>
                </div>
                <h3 className="counter__title">
                  Happy <br /> customer
                </h3>
              </div>
              <div
                className="counter__item"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <div className="counter__number counter_slow">
                  300+ <span>300+</span>
                </div>
                <h3 className="counter__title">
                  total <br /> branches
                </h3>
              </div>
              <div
                className="counter__item"
                data-aos="fade-right"
                data-aos-delay={600}
              >
                <div className="counter__number counter_slow">
                  550+ <span>550+</span>
                </div>
                <h3 className="counter__title">
                  Project <br /> complete
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Counter area end */}
  </>
  
  )
}

export default CounterOne