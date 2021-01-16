import styles from './cars.module.css';

function CarDetail({ selectedIndex, setSelectedIndex, setOpenDetail, car, carsLength }) {
    return (
        <div className={styles.detailWrapper}>
            <div className={styles.detailContainer}>
                <div className={styles.detail}>
                    <div className={styles.detailImage}>
                        <img src={car.imageURL} alt={car.name} />
                    </div>
                    <div className={styles.detailText}>
                        <div className={styles.navigationButtons}>
                            <button className="prev-button" title="Prev" onClick={_ => setSelectedIndex((selectedIndex - 1) < 0 ? 0 : selectedIndex - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', width: '20px' }} viewBox="0 0 492 492"><path d="M464.3 207.4l0.8 0.2H135.9l103.5-103.7c5.1-5.1 7.8-11.9 7.8-19.1 0-7.2-2.8-14-7.8-19.1L223.3 49.5c-5.1-5.1-11.8-7.9-19-7.9 -7.2 0-14 2.8-19 7.8L7.8 226.9C2.8 232 0 238.8 0 246c0 7.2 2.8 14 7.8 19.1l177.4 177.4c5.1 5.1 11.8 7.8 19 7.8 7.2 0 13.9-2.8 19-7.8l16.1-16.1c5.1-5.1 7.8-11.8 7.8-19 0-7.2-2.8-13.6-7.8-18.7L134.7 284.4h330c14.8 0 27.3-12.8 27.3-27.6v-22.8C492 219.2 479.2 207.4 464.3 207.4z" /></svg>
                            </button>
                            <button className="next-button" title="Next" onClick={_ => setSelectedIndex((selectedIndex + 1) === carsLength ? selectedIndex : selectedIndex + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', width: '20px' }} viewBox="0 0 492 492"><path d="M484.1 226.9L306.5 49.2c-5.1-5.1-11.8-7.9-19-7.9 -7.2 0-14 2.8-19 7.9l-16.1 16.1c-5.1 5.1-7.9 11.8-7.9 19 0 7.2 2.8 14.2 7.9 19.3L355.9 207.5H26.6C11.7 207.5 0 219.2 0 234v22.8c0 14.9 11.7 27.6 26.6 27.6h330.5L252.2 388.9c-5.1 5.1-7.9 11.7-7.9 18.9 0 7.2 2.8 13.9 7.9 18.9l16.1 16.1c5.1 5.1 11.8 7.8 19 7.8 7.2 0 14-2.8 19-7.9l177.7-177.7c5.1-5.1 7.9-11.9 7.9-19.1C492 238.8 489.2 232 484.1 226.9z" /></svg>
                            </button>
                            <button title="Close" onClick={(_ => setOpenDetail(false))}>
                                <svg aria-hidden="true" style={{ height: '20px', width: '20px' }} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>
                            </button>
                        </div>
                        <p>{car.description}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetail
