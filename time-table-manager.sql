
CREATE TABLE ryuichiDb.user (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX email_UNIQUE (email ASC));

CREATE TABLE ryuichiDb.module (
  id INT NOT NULL AUTO_INCREMENT,
  module_name VARCHAR(100) NOT NULL,
  start_at TIME NOT NULL,
  end_at TIME NOT NULL,
  day_of_week INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC),
  INDEX fk_module_user_idx (user_id ASC),
  CONSTRAINT fk_module_user
    FOREIGN KEY (user_id)
    REFERENCES ryuichiDb.user (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);