import * as React from 'react';
//import { useState } from 'react';
import { 
    Grid, 
    Box, 
    TextField,    
    MenuItem, 
    FormControl, 
    Select,
    Button    
    } 
    from '@mui/material';
//componente estilo está sendo usado pelo componente formulário
// eslint-disable-next-line
import estilos from './index-form.css';

function FormFront() {
   
    
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstName: e.target.elements.firstName.value,
            properties: e.target.elements.properties,
            initDate: e.target.elements.initDate,
            finalDate: e.target.elements.finalDate,
            lab: e.target.elements.lab,
            onbservation: e.target.elements.onbservation,
        }
        console.log(data);
    }

  
    return(
        <>
        <header className='header-form'>            
            Formulário FrontEnd 
            <object align='right' style={{paddingRight:'5%'}}>                
            <Button style={{color:'#fff'}}>Salvar</Button>                           
            </object>            
                     
        </header>   
           
        <form onSubmit={onSubmit}>
        <Box className='container-form'>
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>                
                    <TextField
                        required 
                        fullWidth
                        name="firstName" 
                        label="Nome" 
                        variant="standard" 
                        color="success"
                        size="normal" 
                        margin="normal"
                        
                    />                
            </Grid>
           
           {/**Uma observação quanto aos campos Data:
            * Na documentação do MUI ele orienta a uitilização do type
            * no lugar dos Componentes React que foram depreciados.
            * date-fns, Day.js, Luxon e Moment.js
            * Como não possuo muita expertise com o MUI, adotei o que 
            * estava em sua documentação            * 
            */}
            <Grid item xs={12} sm={6}  md={3} className="line-form">
                <label className="label-form">Data Inicial</label>
                <Box>                    
                    <TextField
                        name="initDate"
                        type="date"
                        variant="standard"
                    />
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3} className="line-form">
            <label className="label-form">Data Final</label>
                <Box>                    
                    <TextField
                        name="initDate"
                        type="date"
                        variant="standard"
                    />
                </Box>
            </Grid>
        </Grid>

        <Grid container rowSpacing={10}>
        <Grid item xs={6}>                
                    <label className="label-form">Propriedades *</label> 
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth variant="standard">                            
                                <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="properties"
                                label="Lab"
                                color="success"
                                >
                                <MenuItem value={123}>Lab123</MenuItem>
                                <MenuItem value={456}>Lab456</MenuItem>          
                                </Select>
                        </FormControl>
                    </Box>             
            </Grid>
            <Grid item xs={6} className="line-form">                
                    <label className="label-form">Laboratório *</label> 
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth variant="standard">                            
                                <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="lab"
                                label="Lab"
                                color="success"
                                >
                                <MenuItem value={123}>Lab123</MenuItem>
                                <MenuItem value={456}>Lab456</MenuItem>          
                                </Select>
                        </FormControl>
                    </Box>             
            </Grid>

            <Grid item xs={12}>
                <label className="label-form">Observações</label>
                <Box>
                    <TextField
                        multiline 
                        fullWidth
                        rows={4}
                        id="standard-basic" 
                        variant="standard"
                        color="success"
                        size="normal" 
                        margin="normal"                        
                    /> 
                </Box>
            </Grid>            
        </Grid>
        </Box>
        </form>
    </>       

    );
}

export default FormFront;
