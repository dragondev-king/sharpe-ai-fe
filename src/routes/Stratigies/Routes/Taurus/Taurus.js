import { Grid } from "@material-ui/core"
import DefaultLayout from "../../../../components/DefaultLayout"
import TaurusCard from "./components/TaurusCard"
import './style.scss'

const chainNames = ['DAI', 'FRAX', 'miMATIC']

const TaurusContent = () => {
  return (
    <>
    {
      chainNames.map((name) => (
        <Grid item lg={4} md={4} sm={12}><TaurusCard name={name} /></Grid>
      ))
    }
    </>
  )
}

const Taurus = () => {
  return (
    <>
      <DefaultLayout component={<TaurusContent />} /> 
    </>
  )
}

export default Taurus
