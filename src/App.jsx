import { useState, useEffect } from 'react';

export default function App() {
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const form = document.querySelector('form'); // Adjust the selector if needed
    setIsFormValid(form.checkValidity());
  };

  useEffect(() => {
    // Check validity whenever the component mounts
    checkFormValidity();
  }, []);

  return (
    <>
      <div className="container">
        <form className="my-5" onChange={checkFormValidity}> 
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              data-testid="emailInput"
              required 
            />
          </div>
          <button data-testid="submitButton" type="submit" className="btn btn-primary" disabled={!isFormValid}>Submit</button>
        </form>
      </div>
    </>
  );
}
