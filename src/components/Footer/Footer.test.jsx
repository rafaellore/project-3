import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();

    //similar to snapshot but this is to use when the snap is too small to not create a arquive
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 1.5rem;
      }

      .c2 {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        width: 100%;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 1rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <div
              class="c3 c4"
            >
              <h1>
                Olá
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
