## Info

Witam,
Apka jest przygotowana ze zmockowanymi danymi, na podstawie których mozna dodac wlasne "czesci auta" do konfiguratora.
Minimum to obiekt z 3 polami:
 * id
 * name
 * price
dodatkowo mozna dodac index, aby ustawic kolejnosc czescie wyswietlanych dla danej grupy czesci
np. silników przy wyborze silnika


Przy dodawania dodatkowego koloru w celu wyświelenia go właściwie trzeba dodać pole
* colorHex


z warością kolor hex np dla białego `ffffff`.


Przy dodaniu jakiejś grupy częsci samochodowych trzeba to obsłuyć w Reduxie tzn
na przykładzie istniejących danych dodać
typ, akcje i reducer


Przy reducerach trzeba dodać dwa:
jeden który dodaje nam element do stanu i drugi czyszczący element poniej niego w hierarchi (trzeba zedytować wszystkie czyszczace reducery).


Czesci renderuja sie warunkowo na podstawie "modelSchema" z folderu `mock`, Mozna dodać tam własne reguły.
Na tę chwilę wybór silników rózni się w zaleności od wybranego modelu, jak i skrzynia biegów w zaleności od silnika.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
