import Component from '../../common/Component';
import './explanation.scss';

const Title = (data) => `<h3 class="title">${data}</h3>`;

const Contents = (data) => 
`
  <div class="contents">
    <figure role="code" aria-labelledby="code-brute-force">
      <pre>
        ${data.code}
      </pre>
    </figure>
    <figcaption>
        ${data.codeCaption}
    </figcaption>
  </div>
`;

export default class Explanation extends Component{

    template() {

      const { title, contents } = this.props; 
      return `
        <div class="noExplanation">
          ${Title(title)}
          ${Contents(contents)}
        </div>
      `;
    }
  
}