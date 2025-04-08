import "/src/pages/css_files/Timelimit.css";
import { useState } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function TimeLimit() {

  //help button logic
  const handleHelpButtonClick = () => {
    alert("This is the Time Limit page. Use the plus and Minus buttons to add or subtract from your childs time limit.");
  };
  
  const [count, setCount] = useState(0);

  // Function to increase count
  const increment = () => setCount(count + 0.5);

  // Function to decrease count
  const decrement = () => setCount(count - 0.5);

  let [isOpen, setIsOpen] = useState(false)
 
  const confirm = () => {
    setIsOpen(true);
    console.log(isOpen);  // Check if the state is updating
  }
    

  return (
    <div className="tlcenter-container">
      <h1>Time Limit</h1>
      <p>Current time limit : </p>

      <div className="button-container">
        <button className="plus-button" onClick={increment}>+</button>
        <button className="minus-button" onClick={decrement}>-</button>
        <button className="confirm-button" onClick={confirm}>Set Limit</button>
      </div>

      <button className="tlhelp-button"onClick={handleHelpButtonClick}>Help</button>
      <label className="timer-box"><br></br>{count} hours</label>

      
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-1000">
          <div className="fixed inset-0 absolute w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">Confirm?</DialogTitle>
              <Description>Would you like to set this limit?</Description>
              <p>{count} hours</p>
              <div className="flex gap-4">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button onClick={() => setIsOpen(false)}>Confirm</button>
              </div>
            </DialogPanel>
          </div>
      </Dialog>
      

    </div> 
    
    
  );   

};
