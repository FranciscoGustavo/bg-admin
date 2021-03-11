import React from 'react';
import { Formik } from 'formik';
import { InputText } from '../../atoms';
import './styles.css';

const ClientForm = ({ close, client, save }) => {
  const handleStopPropagation = (_event) => {
    _event.stopPropagation();
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.code) {
      errors.code = 'El codigo es requerido';
    }
    if (!values.name) {
      errors.name = 'El nombre es requerido';
    }
    if (!values.email) {
      errors.email = 'El correo es requerido';
    }
    if (!values.phone) {
      errors.phone = 'El telefono es requerido';
    }
    if (!values.address) {
      errors.address = 'La dirección es requerida';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    save(values);
  };

  return (
    <div className="client" onClick={close}>
      <div className="client__container" onClick={handleStopPropagation}>
        <Formik
          initialValues={{ ...client }}
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
            <form className="client__form" onSubmit={handleSubmit}>
              <div className="client__row-2">
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
              </div>

              <div className="client__row">
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
              </div>

              <div className="client__row">
                <InputText
                  type="text"
                  name="address"
                  label="Dirección"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  error={errors.address}
                  touched={touched.address}
                />
              </div>

              <div className="client__row-2">
                <InputText
                  type="email"
                  name="email"
                  label="Correo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
                <InputText
                  type="text"
                  name="phone"
                  label="Telefono"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  error={errors.phone}
                  touched={touched.phone}
                />
              </div>
              <div className="client__row client__buttons">
                <button type="submit" disabled={isSubmitting}>
                  Guardar
                </button>
                <button type="button" disabled={isSubmitting} onClick={close}>
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

export default ClientForm;
