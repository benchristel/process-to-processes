A procedure is a [[Routine]] that [[Access]]es [[Process]]-external [[State]]. (It may also access process-internal state.)

In contrast with other types of [[Routine]]s, a procedure does not have a bounded [[ExecutionTime]]. Correct procedures often loop infinitely. This implies that a language must have some way of expressing procedures in order to be [[TuringComplete]].

The order of [[Statement]]s in a procedure is often important, because the order of process-external [[Effect]]s is often important.