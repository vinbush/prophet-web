import React from "react";

/**
 * Represents Configuration of a specific github repository
 * @param RepoConfig Repository configuration
 * @constructor
 * @action Update RepoConfig to parent component from ConfigForm
 * @action Update Organization into OrganizationDetail
 * @action Update Repository into RepositoryDetail
 * @action Update Errors into ServerErrors
 * @component: ConfigForm, ServerErrors, OrganizationDetail, RepositoryDetail
 */
const SingleConfig = ({conf: RepoConfig}) => {

    const header = (
        <>

        </>
    );

    const footer = (
        <>

        </>
    );

    return (
        <React.Fragment>
            {header}

            {footer}
        </React.Fragment>
    )
}
export default SingleConfig;
