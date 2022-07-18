import * as React from 'react';
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
//por este motivo desativei aqui o eslint
// eslint-disable-next-line
import estilos from './index-form.css';
import { useForm } from 'react-hook-form';

function FormFront() {

    const {register, handleSubmit} = useForm();
   
    
    const onSubmit = (e) => {        
        console.log(e);
    }

  
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <header className='header-form'>            
            Formulário FrontEnd 
            <object align='right' style={{paddingRight:'5%'}}>                
            <Button style={{color:'#fff'}} type='submit'>Salvar</Button>                           
            </object>            
                     
        </header>   
           
        
        <Box className='container-form'>
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>                
                    <TextField
                        required 
                        fullWidth
                        {...register("firstName")} 
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
                        {...register("initDate")}
                        type="date"
                        variant="standard"
                    />
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3} className="line-form">
            <label className="label-form">Data Final</label>
                <Box>                    
                    <TextField
                        {...register("finalDate")}
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
                                {...register("properties")}
                                label="Lab"
                                color="success"
                                >
                                <MenuItem value={123}>id-00123</MenuItem>
                                <MenuItem value={456}>Complemento da moradia: 456</MenuItem>          
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
                                {...register("lab")}
                                label="Lab"
                                color="success"
                                >
                                <MenuItem value={123}>Lab-123</MenuItem>
                                <MenuItem value={456}>Lab-456</MenuItem>          
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
                        {...register("observation")} 
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
