import React from 'react';
import { connect } from 'react-redux';

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

const UserTable: React.FC<Props> = () => {
  const [state, setState] = React.useState({});

  return <div>Tabela</div>;
};

const mapStateToProps = () => ({});

const mapDispatchProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(UserTable);
