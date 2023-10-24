import React, { createContext, useContext, useEffect, useState } from 'react';

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    // Retrieve data from localStorage on initial load
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    // Update localStorage whenever formData changes
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  return useContext(FormDataContext);
};
