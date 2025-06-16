import { RoutesTable } from "../../widgets/RoutesTable/RoutesTable";
import styles from "./RoutesPage.module.scss";

export const RoutesPage = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Таблица маршрутов</h1>
      <RoutesTable />
    </main>
  );
};
