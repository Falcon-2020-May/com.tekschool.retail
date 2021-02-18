$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 1,
  "name": "DataBase SQL query Feature Scenarios",
  "description": "",
  "id": "database-sql-query-feature-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2065605100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Execute all information from Actor Table",
  "description": "",
  "id": "database-sql-query-feature-scenarios;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@testDB"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User connects to PostgreSql Database",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sends querry \u0027select * from public.actor\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should get all information from that table",
  "keyword": "Then "
});
formatter.match({
  "location": "DataBaseStepDefinition.user_connects_to_postgreSQL_database()"
});
formatter.result({
  "duration": 147243600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select * from public.actor",
      "offset": 19
    }
  ],
  "location": "DataBaseStepDefinition.user_sends_query(String)"
});
formatter.result({
  "duration": 13495800,
  "status": "passed"
});
formatter.match({
  "location": "DataBaseStepDefinition.user_should_get_all_information_from_that_table()"
});
formatter.result({
  "duration": 21331800,
  "status": "passed"
});
formatter.after({
  "duration": 582375500,
  "status": "passed"
});
});