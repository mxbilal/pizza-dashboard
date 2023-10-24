import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PeoplePerHour from '../../assets/img/pph-icon.png';
import PerksImg from '../../assets/img/perks-img.png'

const MarketPerks = () => {
    return (
        <>
            <div className="main-area">
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />
                    <div className="market-perks-section">
                        <div className="market-perks-area">
                            <div className="market-perks-inner">
                                <TabView>
                                    <TabPanel header="Marketplace">

                                        <div className="mpi-content">
                                            <div className="mpic-start">
                                                <div className="mpics-left">
                                                    <div className="mpic-img">
                                                        <img src={PeoplePerHour} alt="People-Per-Hour" />
                                                    </div>

                                                    <div className="mpic-top">
                                                        <div className="mpict-heading-area">
                                                            <p className="mpict-left">ActionCoach</p>
                                                            <p className="mpict-right">Free Business Strategy Consultation (worth £500)</p>
                                                        </div>
                                                        <p className='mpict-bottom'>ActionCOACH has grown to be the number one business coaching firm in the world. We're here to help your business grow.</p>
                                                    </div>

                                                </div>

                                                <div className="mpics-right">
                                                    <div className="mpic-button">
                                                        <button className='btn btn-claim-offer'>Claim offer</button>
                                                    </div>
                                                    <div className="mpic-tc">
                                                        <p className='mpictc-para'>Terms & Conditions</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="mpic-start">
                                                <div className="mpics-left">
                                                    <div className="mpic-img">
                                                        <img src={PeoplePerHour} alt="People-Per-Hour" />
                                                    </div>

                                                    <div className="mpic-top">
                                                        <div className="mpict-heading-area">
                                                            <p className="mpict-left">LawBite</p>
                                                            <p className="mpict-right">20% off legal services</p>
                                                        </div>
                                                        <p className='mpict-bottom'>Get expert legal support from online lawyers dedicated to helping your business grow.</p>
                                                    </div>

                                                </div>

                                                <div className="mpics-right">
                                                    <div className="mpic-button">
                                                        <button className='btn btn-claim-offer'>Claim offer</button>
                                                    </div>
                                                    <div className="mpic-tc">
                                                        <p className='mpictc-para'>Terms & Conditions</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="mpic-start">
                                                <div className="mpics-left">
                                                    <div className="mpic-img">
                                                        <img src={PeoplePerHour} alt="People-Per-Hour" />
                                                    </div>

                                                    <div className="mpic-top">
                                                        <div className="mpict-heading-area">
                                                            <p className="mpict-left">Markel</p>
                                                            <p className="mpict-right">10% off insurance policies</p>
                                                        </div>
                                                        <p className='mpict-bottom'>Markel offers specialist insurance combined with unique support services for contractors and small businesses.</p>
                                                    </div>

                                                </div>

                                                <div className="mpics-right">
                                                    <div className="mpic-button">
                                                        <button className='btn btn-claim-offer'>Claim offer</button>
                                                    </div>
                                                    <div className="mpic-tc">
                                                        <p className='mpictc-para'>Terms & Conditions</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="mpic-start">
                                                <div className="mpics-left">
                                                    <div className="mpic-img">
                                                        <img src={PeoplePerHour} alt="People-Per-Hour" />
                                                    </div>

                                                    <div className="mpic-top">
                                                        <div className="mpict-heading-area">
                                                            <p className="mpict-left">PeoplePerHour</p>
                                                            <p className="mpict-right">15% off your first project (use code LAMT15)</p>
                                                        </div>
                                                        <p className='mpict-bottom'>PeoplePerHour is the UK’s #1 online freelance marketplace that enables businesses and freelancers to connect and collaborate.</p>
                                                    </div>

                                                </div>

                                                <div className="mpics-right">
                                                    <div className="mpic-button">
                                                        <button className='btn btn-claim-offer'>Claim offer</button>
                                                    </div>
                                                    <div className="mpic-tc">
                                                        <p className='mpictc-para'>Terms & Conditions</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </TabPanel>
                                    <TabPanel header="Perks">
                                        <div className="perks-section">
                                            <div className="perks-inner">
                                                <div className="perks-left">
                                                    <div className="perks-top-heading">
                                                        <p className="pth-area">Perks</p>
                                                    </div>
                                                    <div className="perks-content">
                                                        <p className="perks-para">
                                                            Right out of the box, you can access discounts on hundreds of top software
                                                            solutions like Slack, Revolut, Hubspot, and Zoom through our partnership
                                                            with BuiltFirst.
                                                        </p>
                                                    </div>

                                                    <div className="perks-button">
                                                        <button className="btn-perks">Sign up to BuiltFirst</button>
                                                    </div>
                                                </div>

                                                <div className="perks-right">
                                                    <div className="perks-image">
                                                        <img src={PerksImg} alt="Perks-Img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                </TabView>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketPerks