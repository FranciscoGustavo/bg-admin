import React from 'react';
import { Formik } from 'formik';
import { InputText } from '../../atoms';
import './styles.css';

const ProductForm = ({ close, product, save }) => {
  const handleValidate = (values) => {
    const errors = {};
    if (!values.code) {
      errors.code = 'El codigo es requerido';
    }
    if (!values.name) {
      errors.name = 'El nombre es requerido';
    }
    if (!values.price) {
      errors.price = 'El precio es requerido';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    save(values);
  };

  return (
    <div className="product">
      <div className="product__container">
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
                  <img
                    src={
                      'https://thumbs.dreamstime.com/b/pera-verde-51013299.jpg' /* values.cover */
                    }
                    alt=""
                  />
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
                  error={errors.name}
                  touched={touched.name}
                />
                {errors.name && touched.name && errors.name}
              </div>
              <div className="product__row-2">
                <InputText
                  type="text"
                  name="code"
                  label="Codigo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.code}
                  error={errors.code}
                  touched={touched.code}
                />
                <InputText
                  type="select"
                  name="isActive"
                  label="Estado"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={[
                    { value: true, label: 'Activo' },
                    { value: false, label: 'No Activo' },
                  ]}
                  value={values.isActive}
                  error={errors.isActive}
                  touched={touched.isActive}
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
                  error={errors.price}
                  touched={touched.price}
                />
                <InputText
                  type="select"
                  name="unity"
                  label="Unidad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.unity}
                  options={['KG', 'PZ']}
                  error={errors.unity}
                  touched={touched.unity}
                />
              </div>
              <div className="product__row product__buttons">
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
};

export default ProductForm;
