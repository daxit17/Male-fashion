import React from 'react';

function NavBar({ FilterItems, uniqueList }) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div>
                        <ul className='d-flex p-0 navbar-filter'>
                            {
                                uniqueList.map((v, i) => {
                                    return (
                                        <>
                                            <li className='nav-link btn btn-dark mx-3 mb-5' key={i} data-filter="" onClick={() => {
                                                FilterItems(v)
                                            }}>{v}</li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;