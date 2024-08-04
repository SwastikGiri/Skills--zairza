import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import logo from '../assets/images/registerlogo.png'
import {Domains} from './Domains'

const Register = () => {
    

    return(
            <div id="register" className="flex justify-center">
                <div id="signintext" className="registertext">
                    <div id="signintextcontainer" style={{padding:'0px 16px 10px 16px'}}>
                        <div id="signintextheading">
                            <span id="sub-heading" className="sub-heading">Join the sprint</span>
                            <span id="heading" className="heading">Register</span>
                        </div>
                        <div>
                            <span className="text-sm">Have already registered? <Link to='/signin' className="font-semibold" style={{color:'#9A8DEC'}}>Log in</Link></span>
                        </div>
                    </div>
                    <div className="lg:hidden mt-4 mb-4">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div id="signininput">
                        <div>
                            <input
                            type="text"
                            placeholder="Full Name"
                            required
                            >
                            </input>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div id="register-inputs-div" className="full-length full-lengthitem1">
                                <input type="email" placeholder="E - mail" 
                                required
                                ></input>
                            </div>
                            <div id="register-inputs-div" className="full-length">
                                <input
                                type="password"placeholder="Set a password" 
                                required></input>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div id="register-inputs-div">
                                <input type="number" placeholder="Registration Number" 
                                required
                                ></input>
                            </div>
                            <div id="register-inputs-div">
                                <input
                                type="number"placeholder="Phone Number" 
                                required></input>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div id="register-inputs-div">
                                <input list="branch"
                                name="branch"
                                placeholder="Branch" 
                                required
                                />
                                <datalist id="branch">
                                    <option value="Architecture" />
                                    <option value="Biotechnology" />
                                    <option value="Civil Engineering" />
                                    <option value="CSE" />
                                    <option value="CSE-AI & ML" />
                                    <option value="Electrical Engineering" />
                                    <option value="E&I" />
                                    <option value="ECE" />
                                    <option value="IT" />
                                    <option value="ME" />
                                    <option value="ME-AI & Robotics" />
                                    <option value="Textile Engineering" />
                                    <option value="Planning" />
                                </datalist>
                            </div>
                            <div id="register-inputs-div">
                                <input list="year"
                                name="year"
                                placeholder="Year" 
                                required
                                />
                                <datalist id="year">
                                    <option value="1st" />
                                    <option value="2nd" />
                                    <option value="3rd" />
                                    <option value="4th" />
                                </datalist>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div id="register-inputs-div">
                                <input list="first-domain"
                                name="first-domain"
                                placeholder="First Domain" 
                                required
                                />
                                <datalist id="first-domain">
                                    {
                                        Domains.map((domain,idx) => (
                                            <option value={domain.name} key={`Domains-${idx}`} />
                                        ))
                                    }
                                </datalist>
                            </div>
                            <div id="register-inputs-div">
                                <input list="second-domain"
                                name="second-domain"
                                placeholder="Second Domain" 
                                required
                                />
                                <datalist id="second-domain">
                                    {
                                        Domains.map((domain,idx) => (
                                            <option value={domain.name} key={`Domains-${idx}`} />
                                        ))
                                    }
                                    <option value='none' />
                                </datalist>
                            </div>
                        </div>
                        <div className="pl-4 pr-4 pt-1 pb-1 text-justify">**At max you can register for 2 domains. In case you want to enrol for only one domain then fill none in the second domain. And write 'N/A' in the Drive Link( for Second Domain ) mentioned below.</div>
                        <div>
                            <input
                            type="url"
                            placeholder="Drive Link (for First Domain)"
                            required
                            >
                            </input>
                        </div>
                        <div>
                            <input
                            type="url"
                            placeholder="Drive Link (for Second Domain)"
                            required
                            >
                            </input>
                        </div>
                        <div className="pl-4 pr-4 pt-1 pb-1 text-justify">**Create a folder in your google drive and share that link here. This is the place where you will submit your solutions for the given task. So keep this drive safely with you</div>
                    </div>
                    <div className="flex lg:justify-end justify-between gap-4 mt-8">
                        <Link to='/' className="flex items-center h-7 no-underline text-white border-white rounded border pl-4 pr-4 justify-center gap-1" style={{width:'90px',fontSize:'12px',fontWeight:'550'}}><GoArrowLeft/>Back</Link>
                        <Link className="flex items-center h-7 bg-white no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1" style={{color:'#303030',border:'#303030',width:'140px',fontSize:'12px',fontWeight:'550'}}>Create Account<GoArrowRight/></Link>
                    </div>
                </div>
                <div><img src = {logo} alt='logo' id="registerlogo" /></div>
            </div>
    )
}

export default Register

