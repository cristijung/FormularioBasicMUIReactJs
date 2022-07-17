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
    const [lab, setLab] = React.useState('');
    const handleChange = (event) => {
      setLab(event.target.value);
    };

  
    return(
        <>
        <header className='header-form'>            
            Formulário FrontEnd 
            <object align='right' className='header-button'>                
            <Button>Salvar</Button>                 
            </object>            
                     
        </header>     
        
        <Box className='container-form'>
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>                
                    <TextField
                        required 
                        fullWidth
                        id="nome" 
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
                        id="date"
                        type="date"
                        variant="standard"
                    />
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3} className="line-form">
            <label className="label-form">Data Final</label>
                <Box>                    
                    <TextField
                        id="date"
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
                                value={lab}
                                label="Lab"
                                onChange={handleChange}
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
                                value={lab}
                                label="Lab"
                                onChange={handleChange}
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
    </>       

    );
}

export default FormFront;
