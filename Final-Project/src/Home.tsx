import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {

    return(
        <>
        <div>
        <div className="row mb-4">
            <div className="col-lg">
                <div className="card w-100 flex-row align-items-center p-0">
          {/* Text content on the left */}
                <div className="card-body text-start">
                    <h5 className="card-title">Check out my personal library</h5>
                    <p className="card-text">
                    Click this link below to see some of my personal favorites and recommendations for other avid bookworms!
                    </p>
                    <Link to="/Library" className="btn btn-primary">My Personal Library</Link>
                </div>

          {/* Image on the right */}
                <img
                    src="https://tse2.mm.bing.net/th?id=OIP.Dsr0yXCHK-6RPFJ5yc9UDgHaHO&pid=Api&P=0&h=180"
                    alt="Library preview"
                    className="img-fluid rounded-end"
                    style={{ maxWidth: '200px', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
        <div className="row justify-content-center mb-4">
            <div className="col-9">
            <div className="card w-75 text-center p-0">
            <div className="card-header">Need a good read?</div>
            <div className="card-body">
                <h5 className="card-title">Check out these links for other libraries and book stores!</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <a href="https://www.thriftbooks.com/?mkwid=|dc&pcrid=76553666203211&pkw=thriftbooks&pmt=be&slid=&product=&plc=&pgrid=3088698320&ptaid=kwd-23284954323:loc-190&utm_source=bing&utm_medium=cpc&utm_campaign=Bing%20%7C%20Search%20%7C%20Brand%20%7C%20National&utm_term=thriftbooks&utm_content=|dc|pcrid|76553666203211|pkw|thriftbooks|pmt|be|product||slid||pgrid|3088698320|ptaid|kwd-23284954323:loc-190|&msclkid=15f4437fcfde1d4ca3152b45eb782653" className="card-link">Thrift Books</a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.betterworldbooks.com/?msclkid=948a87e39f3212f728ddefd9bbeff00d&utm_source=bing&utm_medium=cpc&utm_campaign=Books-Price-USA%20(PSDW)&utm_term=cheap%20books&utm_content=cheap%20books" className="card-link">Better World Books</a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.deseretbook.com/" className="card-link">Deseret Books</a>
                    </li>
                </ul>
            </div>
            </div>
            </div>
        </div>
        
    </div>
    </>
    )

}
export default Home;