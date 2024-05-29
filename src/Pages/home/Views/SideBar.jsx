import React from 'react'
import { CiHome } from 'react-icons/ci'
import { TbTransferIn } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { BsReceipt, BsClipboardData, BsQuestionCircle } from 'react-icons/bs'
import { RiSecurePaymentLine, RiSettings4Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { GoHistory } from 'react-icons/go'
import { MdAccountBalanceWallet } from 'react-icons/md'

import FewChore from '../../../Logo/Frame 56384.svg'
const SideBar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={FewChore} alt='logo' />
          <span></span>
        </div>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='/'>
            <CiHome className='icon' /> Home
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/fund'>
            <TbTransferIn className='icon' /> Fund Transfer
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#'>
            <BsReceipt className='icon' /> Transaction Approval
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#'>
            <BsClipboardData className='icon' /> Airtime and Data
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#'>
            <RiSecurePaymentLine className='icon' /> Bills payment
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/transfer'>
            <GoHistory className='icon' /> Transaction History
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#'>
            <MdAccountBalanceWallet className='icon' /> Account Management
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#'>
            <RiSettings4Line className='icon' /> Settings
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='#'>
            <BsQuestionCircle className='icon' /> FAQ
          </Link>
        </li>
      </ul>
      <button className='Login-button'>
        <Link to='#'>
          <FiLogOut
            className='icon'
            style={{ width: '24px', height: '24px' }}
          />
          Log Out
        </Link>
      </button>
    </aside>
  )
}

export default SideBar
