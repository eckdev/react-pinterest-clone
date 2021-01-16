import Masonry from 'react-masonry-component'
import { useState } from 'react'
import CarDetail from './CarDetail'
import styles from './cars.module.css';

function CarList({ cars }) {
    console.log(cars)
    const [imagesLoaded, setimagesLoaded] = useState(false);
    const [openDetail, setopenDetail] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0)
    const onClickBox = function (index) {
        setselectedIndex(index);
        setopenDetail(true);
    }
    return (
        <>
        { !openDetail &&
                        <div className={styles.wrapper}>
                        <Masonry onImagesLoaded={() => setimagesLoaded(true)}>
                            {
                                cars.map((element, index) => (
                                    <div
                                        key={index}
                                        role="button"
                                        className={styles.box}
                                        onClick={() => onClickBox(index)}
                                        tabIndex={0}
                                    >
                                        <div className={styles.type}>
                                            <div className={styles.dropdown}>
                                                <span>Cars</span>
                                                <svg class="gUZ pBj U9O kVc" height="12" width="12" viewBox="0 0 24 24" aria-label="Kaydetmek istediğiniz panoyu seçin" role="img"><path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path></svg>
                                            </div>
                                            <div className={styles.save}>
                                                Save
                                            </div>
                                        </div>
                                        <img
                                            alt={element.name}
                                            className={styles.image}
                                            src={element.imageURL}
                                            style={{ visibility: imagesLoaded ? 'visible' : 'hidden' }}
                                        />
                                        <div className={styles.nameWrapper}>
                                            <div className={styles.name}>
                                                <span>{element.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Masonry>
                    </div>
        }

        {openDetail && <CarDetail 
        selectedIndex={selectedIndex} 
        setSelectedIndex={setselectedIndex} 
        setOpenDetail={setopenDetail} 
        car={cars[selectedIndex]}
        carsLength={cars.length} />}
        </>

    )
}

export default CarList
