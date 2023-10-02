import Counter from "./Counter";
import {RiTeamLine} from 'react-icons/ri';
import {FaWordpressSimple} from 'react-icons/fa';
import {BiLogoGraphql} from 'react-icons/bi';
import {GrUserExpert} from 'react-icons/gr';



const TerioCounter = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
          <RiTeamLine className="counter-logo"/>
            <Counter end={99} />
            <h6>%</h6>
          </div>
          <div className="boder" />
          <span>SATISFIED CUSTOMER</span>

        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
          <FaWordpressSimple className="counter-logo"/>
            <Counter end={185} />
      
          </div>
          <div className="boder" />
          <span>WORDPRESS</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
          <BiLogoGraphql className="counter-logo"/>
            <Counter end={206} />
          
          </div>
          <div className="boder" />
          <span>LOGO DESIGN</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text mb-0">
          <div className="d-flex align-items-center justify-content-center">
          <GrUserExpert className="counter-logo"/>
            <Counter end={39} />
          </div>
          <div className="boder" />
          <span>Experts</span>
        </div>
      </div>
    </div>
  );
};
export default TerioCounter;
