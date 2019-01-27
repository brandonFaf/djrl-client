import React, { Component } from "react";
import { RequestsContext } from "../Contexts/RequestsStore";
import Request from "./Request";
class RequestList extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="search-bar" onClick={this.props.toggleSearch}>
          <span className="placeholder" role="img" aria-label="Request">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.743 12.574L9.90997 8.74C10.5971 7.80292 10.9651 6.66998 10.96 5.508C10.9539 4.0506 10.3729 2.65448 9.34322 1.6231C8.31352 0.59171 6.91836 0.00841634 5.46097 -3.10705e-06C4.7423 -0.00332077 4.03011 0.1359 3.3656 0.409604C2.70108 0.683309 2.09744 1.08606 1.58958 1.59457C1.08173 2.10307 0.679748 2.70724 0.406895 3.3721C0.134042 4.03696 -0.0042658 4.74933 -2.75331e-05 5.468C0.00627138 6.92549 0.587504 8.3216 1.61736 9.35296C2.64722 10.3843 4.04249 10.9676 5.49997 10.976C6.66679 10.9813 7.80403 10.6091 8.74197 9.915L12.572 13.747C12.6487 13.8237 12.7398 13.8845 12.8401 13.926C12.9404 13.9675 13.0478 13.9888 13.1563 13.9888C13.2648 13.9887 13.3723 13.9673 13.4725 13.9257C13.5727 13.8842 13.6638 13.8233 13.7405 13.7465C13.8172 13.6697 13.878 13.5786 13.9195 13.4784C13.9609 13.3781 13.9823 13.2706 13.9822 13.1621C13.9822 13.0536 13.9608 12.9462 13.9192 12.846C13.8776 12.7457 13.8167 12.6547 13.74 12.578L13.743 12.574ZM5.49997 9.878C4.33409 9.87116 3.218 9.40457 2.39414 8.57959C1.57029 7.75462 1.10522 6.63789 1.09997 5.472C1.09707 4.89772 1.2079 4.32855 1.42608 3.79732C1.64427 3.2661 1.96548 2.78333 2.37119 2.37688C2.7769 1.97042 3.25907 1.64833 3.7899 1.42917C4.32072 1.21002 4.88969 1.09814 5.46397 1.1C6.62882 1.10682 7.74402 1.57258 8.5677 2.39627C9.39139 3.21995 9.85715 4.33515 9.86397 5.5C9.86768 6.07478 9.75743 6.6446 9.5396 7.17652C9.32177 7.70844 9.00069 8.19191 8.5949 8.599C8.18911 9.0061 7.70666 9.32873 7.17544 9.54826C6.64422 9.76779 6.07476 9.87986 5.49997 9.878Z"
                fill="#D4D4D4"
              />
            </svg>{" "}
            Request
          </span>
        </div>
        <p className="request-title">In Voting</p>
        <RequestsContext.Consumer>
          {({ requests, upvote }) =>
            requests.length > 0 ? (
              <div className="requests">
                {requests &&
                  requests
                    .sort((a, b) => b.upvotes - a.upvotes)
                    .filter(x => !x.played)
                    .map(request => {
                      return (
                        <Request
                          key={request.id}
                          request={request}
                          upvote={upvote}
                        />
                      );
                    })}
              </div>
            ) : (
              <div className="empty">MAKE THE FIRST SONG REQUEST</div>
            )
          }
        </RequestsContext.Consumer>
        <button onClick={this.props.logOut}>Leave Party</button>
      </>
    );
  }
}

export default RequestList;
