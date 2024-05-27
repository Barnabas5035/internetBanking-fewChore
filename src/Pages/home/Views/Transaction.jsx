import React from 'react'
import { CiCalendarDate } from 'react-icons/ci'
import MainPage from '../../../Component/mainPage.jsx'
const Transaction = () => {
  return (
    <MainPage>
      <main className='main-container'>
        <div className='input-form'>
          <form>
            <select id='Account' name='Acount'>
              <option value='select source account'>
                Select Source Account
              </option>
              <option value='select source account'>
                Select Source Account
              </option>
            </select>
          </form>

          <div className='main-card'>
            <div className='col-1'>
              <div className='card-1'>
                <div className='inner-card-1'>
                  <h5>Search amount,remark,beneficiary name</h5>
                </div>
              </div>
            </div>

            <div className='col-2'>
              <div className='card'>
                <div className='inner-card-2'>
                  <h3>start date </h3>
                  <CiCalendarDate className='card-icon' />
                </div>
              </div>

              <div className='card'>
                <div className='inner-card-3'>
                  <h3>End date</h3>
                  <CiCalendarDate className='card-icon' />
                </div>
              </div>
              <button className='search-button'>Search</button>
            </div>
          </div>
        </div>
      </main>
    </MainPage>
  )
}

export default Transaction
