import React, { Component, Fragment } from "react";
import { Grid } from "styles/Tables/style.js";
import { mainContent, contentTable } from "constants/Tables/Tables";
import { MainNames, ContentText } from "components/Tables//components/Tables";

class App extends Component {
  render() {
    const checkTable =
      Object.keys(contentTable).length / Object.keys(mainContent).length;
    return (
      <Fragment>
        {Number.isInteger(checkTable) ? (
          <Grid howRow={Object.keys(mainContent).length}>
            {mainContent.map((item, index) => (
              <MainNames key={index} names={item.title} />
            ))}
            {contentTable.map((item, index) => (
              <ContentText key={index} content={item} />
            ))}
          </Grid>
        ) : (
          alert(
            "С вашей таблицей что-то не так, пожалуйста проверьте ваши данные."
          )
        )}
      </Fragment>
    );
  }
}

export default App;
