import React, { memo, useCallback } from 'react';

import { Box, Divider, Grid, MenuItem } from '@material-ui/core';

import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { ComeBackButton, SaveButton } from 'src/components/ui/Buttons';
import { FormTextField } from 'src/components/ui/TextFields';
import useRealEstateFundsController from 'src/helpers/useRealEstateFundsController';
import Connect from 'src/store/connect';

import schema from './schemas/basicFormSchema';

const BasicForm = memo(({ realEstateFund, dispatch }) => {
  const { navigate, save } = useRealEstateFundsController(dispatch);

  const onSubmit = (data, { setSubmitting }) => {
    setSubmitting(false);
    save(data);
  };

  const comeBack = useCallback(() => {
    navigate({ currentView: 'results' });
  }, []);

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={schema}
      initialValues={realEstateFund}
    >
      {({ values, errors, touched, isSubmitting, handleChange }) => (
        <Form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <FormTextField
                name="ticker"
                label="Ticker"
                onChange={handleChange}
                value={values.ticker}
                helperText={touched.ticker && errors.ticker}
                error={Boolean(touched.ticker && errors.ticker)}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <FormTextField
                name="name"
                label="Razão social"
                onChange={handleChange}
                value={values.name}
                helperText={touched.name && errors.name}
                error={Boolean(touched.name && errors.name)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormTextField
                name="document"
                label="CNPJ"
                onChange={handleChange}
                value={values.document}
                helperText={touched.document && errors.document}
                error={Boolean(touched.document && errors.document)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField
                name="manager"
                label="Gestor"
                onChange={handleChange}
                value={values.manager}
                helperText={touched.manager && errors.manager}
                error={Boolean(touched.manager && errors.manager)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormTextField
                select
                name="segment"
                label="Segmento"
                onChange={handleChange}
                value={values.segment}
                helperText={touched.segment && errors.segment}
                error={Boolean(touched.segment && errors.segment)}
              >
                <MenuItem key={1} value={1}>
                  SHOPPINGS
                </MenuItem>
                <MenuItem key={2} value={2}>
                  LOGISTICA
                </MenuItem>
                <MenuItem key={3} value={3}>
                  LAGES CORPORATIVAS
                </MenuItem>
              </FormTextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormTextField
                select
                name="mandate"
                label="Mandato"
                onChange={handleChange}
                value={values.mandate}
                helperText={touched.mandate && errors.mandate}
                error={Boolean(touched.mandate && errors.mandate)}
              >
                <MenuItem key={1} value={1}>
                  RENDA
                </MenuItem>
                <MenuItem key={2} value={2}>
                  DESENVOLVIMENTO
                </MenuItem>
              </FormTextField>
            </Grid>
            <Grid item xs={12} md={9}>
              <FormTextField
                name="administrator"
                label="Administrador"
                onChange={handleChange}
                value={values.administrator}
                helperText={touched.administrator && errors.administrator}
                error={Boolean(touched.administrator && errors.administrator)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormTextField
                name="administratorDocument"
                label="CNPJ Administrador"
                onChange={handleChange}
                value={values.administratorDocument}
                helperText={
                  touched.administratorDocument && errors.administratorDocument
                }
                error={Boolean(
                  touched.administratorDocument && errors.administratorDocument
                )}
              />
            </Grid>
          </Grid>
          <Divider light variant="middle" />
          <Box display="flex" justifyContent="flex-end" p={2}>
            <SaveButton type="submit" disabled={isSubmitting} />
            <ComeBackButton onClick={comeBack} />
          </Box>
        </Form>
      )}
    </Formik>
  );
});

BasicForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  realEstateFund: PropTypes.object.isRequired
};

const mapStateToProps = ({ realEstateFundsStore }, props) => {
  const {
    register: {
      basicForm: { realEstateFund }
    }
  } = realEstateFundsStore;
  return { realEstateFund, ...props };
};

export default Connect(mapStateToProps)(BasicForm);
