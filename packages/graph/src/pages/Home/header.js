import './header.scss';
import logo from '../../logo/logo_75px.svg';
import logoWebp from '../../logo/logo_75px.webp';
import Component from '../../common/Component';

export default class Header extends Component{

    template() {

        const { datas } = this.props;
        console.log(datas);
        return `
            <div class="leftSubHeader">
                <picture>
                    <source srcset=${logo} type="image/svg+xml">

                    </source>
                    <img src=${logoWebp}/>
                </picture>
                <span>Best A</span>
            </div>
            <div class="rightSubHeader">
                ${
                    datas.map((data) => 
                        `<span>${data}</span>`
                    ).join("")
                }
            </div>
        `;
    }
    
} 