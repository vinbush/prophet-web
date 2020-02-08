import React from "react";
import {useGlobalState} from '../state';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AutosizeInput from 'react-input-autosize';
import {Checkbox, Paper} from '@material-ui/core';

interface RepositoryFormProps {
    index: number;
}

const RepositoryForm = (props: RepositoryFormProps) => {
    const [vConfigMultiple, uConfigMultiple] = useGlobalState('configMultiple');

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            autoSizeInput: {
                margin: '2px'
            },
            boxik: {
                padding: '10px'
            }
        }),
    );
    const classes = useStyles();

    const handleMonolith = (e: React.FormEvent<HTMLInputElement>): void => {
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        newVal[props.index].isMonolith = !vConfigMultiple[props.index].isMonolith;
        uConfigMultiple(newVal);
    };

    const handleOrganization = (e: React.FormEvent<HTMLInputElement>): void => {
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        newVal[props.index].organization = e.currentTarget.value;
        uConfigMultiple(newVal);
    };

    const handleRepository = (e: React.FormEvent<HTMLInputElement>): void => {
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        newVal[props.index].repository = e.currentTarget.value;
        uConfigMultiple(newVal);
    };

    const onRemove = () => {
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        newVal.splice(props.index, 1);
        uConfigMultiple(newVal);
    }

    return (

        <div>
            {props.index} :

            <Paper className={classes.boxik}>

                    <button onClick={onRemove}>Remove</button>

                    https://github.com/
                    
                    <AutosizeInput
                        name="organization"
                        placeholder="Organization"
                        value={vConfigMultiple[props.index].organization}
                        onChange={handleOrganization}
                    />
                    <span> / </span>
                    <AutosizeInput
                        className={classes.autoSizeInput}
                        name="repository"
                        placeholder="Repository"
                        value={vConfigMultiple[props.index].repository}
                        onChange={handleRepository}
                    />
                    <Checkbox
                        checked={vConfigMultiple[props.index].isMonolith}
                        onChange={handleMonolith}
                        value={true}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />monolith
                </Paper>

        </div>
    )
}

export default RepositoryForm;