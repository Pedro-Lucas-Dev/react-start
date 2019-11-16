import React,{Component} from "react"
import {SentimentDissatisfiedRounded} from '@material-ui/icons';


class EmptyTable extends Component {
    render(){
        return(
            <div>
               <p>Não há nada cadastrado</p>
               <SentimentDissatisfiedRounded/>
            </div>
        )
    }
}
export default EmptyTable