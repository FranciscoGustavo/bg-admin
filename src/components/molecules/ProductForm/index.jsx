import React from 'react';
import { Formik } from 'formik';
import { InputText } from '../../atoms';
import './styles.css';

const ProductForm = ({ close, product, save }) => {
  const handleValidate = (values) => {
    const errors = {};
    /*if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }*/
    return errors;
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    save(values);
  }

  return (
    <div className="product">
      <div className="product__container">
        <h1>Fromulario</h1>
        <Formik
          initialValues={{ ...product }}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
       {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
       }) => (
         <form className="product__form" onSubmit={handleSubmit}>
           <div className="product__cover">
             <label htmlFor="cover">
                <img src={values.cover} alt=""/>
             </label>
              <input
                type="file"
                id="cover"
                name="cover"
                onChange={handleChange}
                onBlur={handleBlur}
              />
           </div>
           <div className="product__row">
              <InputText
                type="text"
                name="name"
                label="Nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
           <div className="product__row-2">
              <InputText
                type="number"
                name="price"
                label="Precio"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              <InputText
                type="select"
                name="unity"
                label="Unidad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.unity}
                options={['kg', 'pz']}
              />
           </div>
           <div className="product__row">
              <button type="submit" disabled={isSubmitting}>
                Guardar
              </button>
              <button type="submit" disabled={isSubmitting} onClick={close}>
                Cancelar
              </button>
           </div>
         </form>
       )}
     </Formik>
      </div>
    </div>
  );
}

export default ProductForm; 