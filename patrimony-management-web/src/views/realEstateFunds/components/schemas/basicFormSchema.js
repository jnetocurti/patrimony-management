import * as Yup from 'yup';

const schema = Yup.object().shape({
  ticker: Yup.string()
    .matches(/^[A-Z]{4}\d{2}$/, 'Formato inválido')
    .required('Ticker é obrigatório'),
  name: Yup.string()
    .min(4, 'Deve ser maior que 4')
    .max(50, 'Deve ser menor que 50')
    .required('Razão social é obrigatório'),
  document: Yup.string()
    .matches(/^[\d]{2}\.[\d]{3}\.[\d]{3}\/[\d]{4}-[\d]{2}$/, 'Formato inválido')
    .required('CNPJ é obrigatório'),
  manager: Yup.string()
    .min(4, 'Deve ser maior que 4')
    .max(50, 'Deve ser menor que 50')
    .required('Gestor é obrigatório'),
  segment: Yup.string().required('Segmento é obrigatório'),
  mandate: Yup.string().required('Mandato é obrigatório'),
  administrator: Yup.string()
    .min(4, 'Deve ser maior que 4')
    .max(50, 'Deve ser menor que 50')
    .required('Administrador é obrigatório'),
  administratorDocument: Yup.string()
    .matches(/^[\d]{2}\.[\d]{3}\.[\d]{3}\/[\d]{4}-[\d]{2}$/, 'Formato inválido')
    .required('CNPJ administrador é obrigatório')
});

export default schema;
